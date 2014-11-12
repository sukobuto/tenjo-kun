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
            $.get('templates.html').then(function (templates) {
                $('.templates').html(templates);
            });
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
        $('.deviceready').append('<p>started</p>');
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



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9BcHAudHMiLCJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9wYWdlcy9QYWdlVmlld01vZGVsLnRzIiwiQzovVXNlcnMvS2VudGEvUGhwc3Rvcm1Qcm9qZWN0cy90ZW5qby1rdW4vcGFnZXMvaG9tZS9Ib21lVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5pbml0aWFsaXplIiwiQXBwLmJpbmRFdmVudHMiLCJBcHAucmVjZWl2ZWRFdmVudCIsIlBhZ2VWaWV3TW9kZWwiLCJQYWdlVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiSG9tZVZpZXdNb2RlbCIsIkhvbWVWaWV3TW9kZWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsMkNBQTJDO0FBRTNDLElBQU0sR0FBRztJQUFUQSxTQUFNQSxHQUFHQTtRQUFUQyxpQkFrQ0NBO1FBdEJBQSw0QkFBNEJBO1FBQzVCQSxFQUFFQTtRQUNGQSx5RUFBeUVBO1FBQ3pFQSw4REFBOERBO1FBQ3ZEQSxrQkFBYUEsR0FBR0E7WUFDdEJBLEtBQUlBLENBQUNBLGFBQWFBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1lBQ2xDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVNBLFNBQVNBO2dCQUM5QyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0EsQ0FBQ0E7SUFhSEEsQ0FBQ0E7SUFqQ0FELDBCQUEwQkE7SUFDbkJBLHdCQUFVQSxHQUFqQkE7UUFDQ0UsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7SUFDbkJBLENBQUNBO0lBQ0RGLHVCQUF1QkE7SUFDdkJBLEVBQUVBO0lBQ0ZBLG1FQUFtRUE7SUFDbkVBLGtEQUFrREE7SUFDM0NBLHdCQUFVQSxHQUFqQkE7UUFDQ0csUUFBUUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUNyRUEsQ0FBQ0E7SUFXREgsaUNBQWlDQTtJQUMxQkEsMkJBQWFBLEdBQXBCQSxVQUFxQkEsRUFBRUE7UUFDdEJJLElBQUlBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQ2hEQSxJQUFJQSxnQkFBZ0JBLEdBQUdBLGFBQWFBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1FBQ2pFQSxJQUFJQSxlQUFlQSxHQUFHQSxhQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUUvREEsZ0JBQWdCQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUN4REEsZUFBZUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsZ0JBQWdCQSxDQUFDQSxDQUFDQTtRQUV4REEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNyQ0EsQ0FBQ0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUFDRkosVUFBQ0E7QUFBREEsQ0FBQ0EsSUFBQTtBQUVELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDcEIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7QUMxQ2pCLDJDQUEyQztBQUUzQyxJQUFNLGFBQWE7SUFBbkJLLFNBQU1BLGFBQWFBO0lBRW5CQyxDQUFDQTtJQUFERCxvQkFBQ0E7QUFBREEsQ0FBQ0EsSUFBQTs7O0FDSkQsOENBQThDOzs7Ozs7O0FBRTlDLElBQU0sYUFBYTtJQUFTRSxVQUF0QkEsYUFBYUEsVUFBc0JBO0lBQXpDQSxTQUFNQSxhQUFhQTtRQUFTQyw4QkFBYUE7SUFFekNBLENBQUNBO0lBQURELG9CQUFDQTtBQUFEQSxDQUFDQSxFQUYyQixhQUFhLEVBRXhDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgS2VudGEgb24gMjAxNC8xMS8wNi5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHQvLyBBcHBsaWNhdGlvbiBDb25zdHJ1Y3RvclxyXG5cdHB1YmxpYyBpbml0aWFsaXplKCkge1xyXG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XHJcblx0fVxyXG5cdC8vIEJpbmQgRXZlbnQgTGlzdGVuZXJzXHJcblx0Ly9cclxuXHQvLyBCaW5kIGFueSBldmVudHMgdGhhdCBhcmUgcmVxdWlyZWQgb24gc3RhcnR1cC4gQ29tbW9uIGV2ZW50cyBhcmU6XHJcblx0Ly8gJ2xvYWQnLCAnZGV2aWNlcmVhZHknLCAnb2ZmbGluZScsIGFuZCAnb25saW5lJy5cclxuXHRwdWJsaWMgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5vbkRldmljZVJlYWR5LCBmYWxzZSk7XHJcblx0fVxyXG5cdC8vIGRldmljZXJlYWR5IEV2ZW50IEhhbmRsZXJcclxuXHQvL1xyXG5cdC8vIFRoZSBzY29wZSBvZiAndGhpcycgaXMgdGhlIGV2ZW50LiBJbiBvcmRlciB0byBjYWxsIHRoZSAncmVjZWl2ZWRFdmVudCdcclxuXHQvLyBmdW5jdGlvbiwgd2UgbXVzdCBleHBsaWNpdGx5IGNhbGwgJ2FwcC5yZWNlaXZlZEV2ZW50KC4uLik7J1xyXG5cdHB1YmxpYyBvbkRldmljZVJlYWR5ID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5yZWNlaXZlZEV2ZW50KCdkZXZpY2VyZWFkeScpO1xyXG5cdFx0JC5nZXQoJ3RlbXBsYXRlcy5odG1sJykudGhlbihmdW5jdGlvbih0ZW1wbGF0ZXMpIHtcclxuXHRcdFx0JCgnLnRlbXBsYXRlcycpLmh0bWwodGVtcGxhdGVzKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Ly8gVXBkYXRlIERPTSBvbiBhIFJlY2VpdmVkIEV2ZW50XHJcblx0cHVibGljIHJlY2VpdmVkRXZlbnQoaWQpIHtcclxuXHRcdHZhciBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdFx0dmFyIGxpc3RlbmluZ0VsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0ZW5pbmcnKTtcclxuXHRcdHZhciByZWNlaXZlZEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNlaXZlZCcpO1xyXG5cdFxyXG5cdFx0bGlzdGVuaW5nRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcclxuXHRcdHJlY2VpdmVkRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7Jyk7XHJcblx0XHJcblx0XHRjb25zb2xlLmxvZygnUmVjZWl2ZWQgRXZlbnQ6ICcgKyBpZCk7XHJcblx0XHQkKCcuZGV2aWNlcmVhZHknKS5hcHBlbmQoJzxwPnN0YXJ0ZWQ8L3A+Jyk7XHJcblx0fVxyXG59XHJcblxyXG52YXIgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdGlhbGl6ZSgpOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9yZWZlcmVuY2VzLmQudHNcIiAvPlxyXG5cclxuY2xhc3MgUGFnZVZpZXdNb2RlbCB7XHJcblx0XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vcmVmZXJlbmNlcy5kLnRzXCIgLz5cclxuXHJcbmNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBQYWdlVmlld01vZGVsIHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=