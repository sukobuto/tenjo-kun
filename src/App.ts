/// <reference path="../typings/tsd.d.ts"/>

class App {
	public page :PageViewModel = HomeViewModel.factory();
	
	constructor() {
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
		this.declareRoutes();
	};
	// Update DOM on a Received Event
	public receivedEvent(id) {
		console.log('Received Event: ' + id);
	}
	
	public initializeViewModel(context : any) : void {
		console.log(context);
		this.page.initialize(context);
	}
	
	public declareRoutes() {
		page('/', () => this.page = HomeViewModel.factory(), this.initializeViewModel);
		page('/new', () => this.page = EditViewModel.factory(), this.initializeViewModel);
		page('/edit/:id', () => this.page = EditViewModel.factory(), this.initializeViewModel);
		page();
	}
}

var app = new App();
app.initialize();