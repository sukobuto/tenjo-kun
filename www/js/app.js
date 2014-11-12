/**
 * Created by Kenta on 2014/11/06.
 */
/// <reference path="../typings/tsd.d.ts"/>
var App = (function () {
    function App() {
        var _this = this;
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        this.onDeviceReady = function () {
            _this.receivedEvent('deviceready');
        };
    }
    // Application Constructor
    App.prototype.initialize = function () {
        this.bindEvents();
    };
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    App.prototype.bindEvents = function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    // Update DOM on a Received Event
    App.prototype.receivedEvent = function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    };
    return App;
})();
var app = new App();
app.initialize();


/// <reference path="../references.d.ts" />
var PageViewModel = (function () {
    function PageViewModel() {
    }
    return PageViewModel;
})();


/// <reference path="../../references.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HomeViewModel = (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        _super.apply(this, arguments);
    }
    return HomeViewModel;
})(PageViewModel);



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi90ZW5qby1rdW4vQXBwLnRzIiwiQzovVXNlcnMvS2VudGEvUGhwc3Rvcm1Qcm9qZWN0cy90ZW5qby1rdW4vdGVuam8ta3VuL3BhZ2VzL1BhZ2VWaWV3TW9kZWwudHMiLCJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi90ZW5qby1rdW4vcGFnZXMvaG9tZS9Ib21lVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5pbml0aWFsaXplIiwiQXBwLmJpbmRFdmVudHMiLCJBcHAucmVjZWl2ZWRFdmVudCIsIlBhZ2VWaWV3TW9kZWwiLCJQYWdlVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiSG9tZVZpZXdNb2RlbCIsIkhvbWVWaWV3TW9kZWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsMkNBQTJDO0FBRTNDLElBQU0sR0FBRztJQUFUQSxTQUFNQSxHQUFHQTtRQUFUQyxpQkE4QkNBO1FBbEJBQSw0QkFBNEJBO1FBQzVCQSxFQUFFQTtRQUNGQSx5RUFBeUVBO1FBQ3pFQSw4REFBOERBO1FBQ3ZEQSxrQkFBYUEsR0FBR0E7WUFDdEJBLEtBQUlBLENBQUNBLGFBQWFBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBQ25DQSxDQUFDQSxDQUFDQTtJQVlIQSxDQUFDQTtJQTdCQUQsMEJBQTBCQTtJQUNuQkEsd0JBQVVBLEdBQWpCQTtRQUNDRSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFDREYsdUJBQXVCQTtJQUN2QkEsRUFBRUE7SUFDRkEsbUVBQW1FQTtJQUNuRUEsa0RBQWtEQTtJQUMzQ0Esd0JBQVVBLEdBQWpCQTtRQUNDRyxRQUFRQSxDQUFDQSxnQkFBZ0JBLENBQUNBLGFBQWFBLEVBQUVBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3JFQSxDQUFDQTtJQVFESCxpQ0FBaUNBO0lBQzFCQSwyQkFBYUEsR0FBcEJBLFVBQXFCQSxFQUFFQTtRQUN0QkksSUFBSUEsYUFBYUEsR0FBR0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLElBQUlBLGdCQUFnQkEsR0FBR0EsYUFBYUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7UUFDakVBLElBQUlBLGVBQWVBLEdBQUdBLGFBQWFBLENBQUNBLGFBQWFBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBRS9EQSxnQkFBZ0JBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3hEQSxlQUFlQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFFQSxnQkFBZ0JBLENBQUNBLENBQUNBO1FBRXhEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBO0lBQ3RDQSxDQUFDQTtJQUNGSixVQUFDQTtBQUFEQSxDQUFDQSxJQUFBO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNwQixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7OztBQ3RDakIsMkNBQTJDO0FBRTNDLElBQU0sYUFBYTtJQUFuQkssU0FBTUEsYUFBYUE7SUFFbkJDLENBQUNBO0lBQURELG9CQUFDQTtBQUFEQSxDQUFDQSxJQUFBOzs7QUNKRCw4Q0FBOEM7Ozs7Ozs7QUFFOUMsSUFBTSxhQUFhO0lBQVNFLFVBQXRCQSxhQUFhQSxVQUFzQkE7SUFBekNBLFNBQU1BLGFBQWFBO1FBQVNDLDhCQUFhQTtJQUV6Q0EsQ0FBQ0E7SUFBREQsb0JBQUNBO0FBQURBLENBQUNBLEVBRjJCLGFBQWEsRUFFeEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBLZW50YSBvbiAyMDE0LzExLzA2LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XHJcblxyXG5jbGFzcyBBcHAge1xyXG5cdC8vIEFwcGxpY2F0aW9uIENvbnN0cnVjdG9yXHJcblx0cHVibGljIGluaXRpYWxpemUoKSB7XHJcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcclxuXHR9XHJcblx0Ly8gQmluZCBFdmVudCBMaXN0ZW5lcnNcclxuXHQvL1xyXG5cdC8vIEJpbmQgYW55IGV2ZW50cyB0aGF0IGFyZSByZXF1aXJlZCBvbiBzdGFydHVwLiBDb21tb24gZXZlbnRzIGFyZTpcclxuXHQvLyAnbG9hZCcsICdkZXZpY2VyZWFkeScsICdvZmZsaW5lJywgYW5kICdvbmxpbmUnLlxyXG5cdHB1YmxpYyBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLm9uRGV2aWNlUmVhZHksIGZhbHNlKTtcclxuXHR9XHJcblx0Ly8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxyXG5cdC8vXHJcblx0Ly8gVGhlIHNjb3BlIG9mICd0aGlzJyBpcyB0aGUgZXZlbnQuIEluIG9yZGVyIHRvIGNhbGwgdGhlICdyZWNlaXZlZEV2ZW50J1xyXG5cdC8vIGZ1bmN0aW9uLCB3ZSBtdXN0IGV4cGxpY2l0bHkgY2FsbCAnYXBwLnJlY2VpdmVkRXZlbnQoLi4uKTsnXHJcblx0cHVibGljIG9uRGV2aWNlUmVhZHkgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnJlY2VpdmVkRXZlbnQoJ2RldmljZXJlYWR5Jyk7XHJcblx0fTtcclxuXHQvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcclxuXHRwdWJsaWMgcmVjZWl2ZWRFdmVudChpZCkge1xyXG5cdFx0dmFyIHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0XHR2YXIgbGlzdGVuaW5nRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RlbmluZycpO1xyXG5cdFx0dmFyIHJlY2VpdmVkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VpdmVkJyk7XHJcblx0XHJcblx0XHRsaXN0ZW5pbmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xyXG5cdFx0cmVjZWl2ZWRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazsnKTtcclxuXHRcclxuXHRcdGNvbnNvbGUubG9nKCdSZWNlaXZlZCBFdmVudDogJyArIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0aWFsaXplKCk7IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3JlZmVyZW5jZXMuZC50c1wiIC8+XHJcblxyXG5jbGFzcyBQYWdlVmlld01vZGVsIHtcclxuXHRcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9yZWZlcmVuY2VzLmQudHNcIiAvPlxyXG5cclxuY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIFBhZ2VWaWV3TW9kZWwge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==