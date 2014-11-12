/// <reference path="../typings/tsd.d.ts"/>

class App {
	public pages :{[name:string]:PageViewModel};
	public page = 'home';
	
	constructor() {
		var pages = this.pages = {
			'home': new HomeViewModel()
		};
		ko.track(pages);
		ko.track(this);
	}
	
	// Application Constructor
	public initialize() {
		this.bindEvents();
	}
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	public bindEvents() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	}
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	public onDeviceReady = () => {
		this.receivedEvent('deviceready');
		ko.applyBindings(this);
	};
	// Update DOM on a Received Event
	public receivedEvent(id) {
		console.log('Received Event: ' + id);
	}
}

var app = new App();
app.initialize();