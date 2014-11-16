/// <reference path="references.d.ts" />

module tj {
	
	export class App {
		public page : PageViewModel = HomeViewModel.factory();

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
			this.declareServices();
			ko.punches.enableAll();
			ko.applyBindings(this);
			this.declareRoutes();
			this.page.initialize({});
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
		
		public declareServices() {
			var di = DependencyInjector.factoryDefault();
			di.set('autoCompleteSources', function() {
				return {
					stations: new AutoCompleteSource('stations'),
					crews: new AutoCompleteSource('crews')
				}
			}, true);
			di.set('preference', function() {
				var preference = new Preference();
				preference.load();
				return preference;
			}, true);
		}
	}
	
	export var app = new tj.App();
	app.initialize();
}