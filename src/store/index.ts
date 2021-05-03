import { writable } from 'svelte/store';


type LocationGoodData = {
	location: string;
	pricePerUnit: number;
	purchasePricePerUnit: number;
	sellPricePerUnit: number;
	spread: number;
	quantityAvailable: number;
}

type MarketGoodData = {
	symbol: string;
	prices: LocationGoodData[];
}

const messageStore = writable<MarketGoodData[]>([]);

const socket = new WebSocket('wss://dev.market.spacetraders.stream');

// Connection opened
socket.addEventListener('open', function (event) {
    console.log("It's open");
	sendMessage('sync-locations');
});

// Listen for messages
socket.addEventListener('message', function (event) {
	const data = JSON.parse(event.data);
	if(data.locations){
	  let marketGoodData: MarketGoodData[] = [];
	  
	  data.locations.map((location) => {
		if(location.marketplace){
			location.marketplace.map((locationGood) => {
				const storeGood = marketGoodData.find((good) => good.symbol === locationGood.symbol)
				locationGood.location = location.symbol;
				if(storeGood){
					storeGood.prices.push(locationGood)
				} else {
					marketGoodData.push({
						symbol: locationGood.symbol,
						prices: [locationGood]
					})
				}
			})
		}
	  })

	  messageStore.set(marketGoodData);
	} else {
		messageStore.update((marketGoodData) => {
			data.map((entry) => {
				const locationSymbol = Object.keys(entry)[0];
				const priceChanges = entry[locationSymbol];
				priceChanges.map((change) => {
					const goodSymbolIdx = marketGoodData.findIndex((good) => good.symbol === change.symbol);
					const currentPricesIdx = marketGoodData[goodSymbolIdx].prices.findIndex((price) => price.location === locationSymbol);
					change.location = locationSymbol;
					marketGoodData[goodSymbolIdx].prices[currentPricesIdx] = change;
				})
			})
			return marketGoodData;
		})
	}
});

const sendMessage = (message) => {
	if (socket.readyState <= 1) {
		socket.send(message);
	}
}

export default {
	state: messageStore
}


