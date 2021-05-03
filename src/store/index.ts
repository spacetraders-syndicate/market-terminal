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
		
	} else {
		messageStore.set(data);
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


