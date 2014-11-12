/// <reference path="../typings/tsd.d.ts"/>

class App {
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
		$(function() {
			$('#deviceready').append('<p>started</p>');
		});
		//(function($) {
		//	$(document).ready(function() {
		//		$('.deviceready').append('<p>started</p>');
		//		$.get('templates.html').then(function(templates) {
		//			$('.templates').html(templates);
		//
		//		});
		//	});
		//})(jQuery);
	};
	// Update DOM on a Received Event
	public receivedEvent(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');
	
		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');
	
		console.log('Received Event: ' + id);
	}
}

var app = new App();
app.initialize();