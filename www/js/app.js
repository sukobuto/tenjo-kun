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
            (function ($) {
                $(document).ready(function () {
                    $('.deviceready').append('<p>started</p>');
                    $.get('templates.html').then(function (templates) {
                        $('.templates').html(templates);
                    });
                });
            })(jQuery);
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



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9BcHAudHMiLCJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9wYWdlcy9QYWdlVmlld01vZGVsLnRzIiwiQzovVXNlcnMvS2VudGEvUGhwc3Rvcm1Qcm9qZWN0cy90ZW5qby1rdW4vcGFnZXMvaG9tZS9Ib21lVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5pbml0aWFsaXplIiwiQXBwLmJpbmRFdmVudHMiLCJBcHAucmVjZWl2ZWRFdmVudCIsIlBhZ2VWaWV3TW9kZWwiLCJQYWdlVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiSG9tZVZpZXdNb2RlbCIsIkhvbWVWaWV3TW9kZWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUUzQyxJQUFNLEdBQUc7SUFBVEEsU0FBTUEsR0FBR0E7UUFBVEMsaUJBdUNDQTtRQTNCQUEsNEJBQTRCQTtRQUM1QkEsRUFBRUE7UUFDRkEseUVBQXlFQTtRQUN6RUEsOERBQThEQTtRQUN2REEsa0JBQWFBLEdBQUdBO1lBQ3RCQSxLQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtZQUNsQ0EsQ0FBQ0EsVUFBU0EsQ0FBQ0E7Z0JBQ1YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUzt3QkFDOUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFakMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ1pBLENBQUNBLENBQUNBO0lBWUhBLENBQUNBO0lBdENBRCwwQkFBMEJBO0lBQ25CQSx3QkFBVUEsR0FBakJBO1FBQ0NFLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO0lBQ25CQSxDQUFDQTtJQUNERix1QkFBdUJBO0lBQ3ZCQSxFQUFFQTtJQUNGQSxtRUFBbUVBO0lBQ25FQSxrREFBa0RBO0lBQzNDQSx3QkFBVUEsR0FBakJBO1FBQ0NHLFFBQVFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsYUFBYUEsRUFBRUEsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDckVBLENBQUNBO0lBaUJESCxpQ0FBaUNBO0lBQzFCQSwyQkFBYUEsR0FBcEJBLFVBQXFCQSxFQUFFQTtRQUN0QkksSUFBSUEsYUFBYUEsR0FBR0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLElBQUlBLGdCQUFnQkEsR0FBR0EsYUFBYUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7UUFDakVBLElBQUlBLGVBQWVBLEdBQUdBLGFBQWFBLENBQUNBLGFBQWFBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBRS9EQSxnQkFBZ0JBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3hEQSxlQUFlQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFFQSxnQkFBZ0JBLENBQUNBLENBQUNBO1FBRXhEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBO0lBQ3RDQSxDQUFDQTtJQUNGSixVQUFDQTtBQUFEQSxDQUFDQSxJQUFBO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNwQixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7OztBQzVDakIsMkNBQTJDO0FBRTNDLElBQU0sYUFBYTtJQUFuQkssU0FBTUEsYUFBYUE7SUFFbkJDLENBQUNBO0lBQURELG9CQUFDQTtBQUFEQSxDQUFDQSxJQUFBOzs7QUNKRCw4Q0FBOEM7Ozs7Ozs7QUFFOUMsSUFBTSxhQUFhO0lBQVNFLFVBQXRCQSxhQUFhQSxVQUFzQkE7SUFBekNBLFNBQU1BLGFBQWFBO1FBQVNDLDhCQUFhQTtJQUV6Q0EsQ0FBQ0E7SUFBREQsb0JBQUNBO0FBQURBLENBQUNBLEVBRjJCLGFBQWEsRUFFeEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cclxuXHJcbmNsYXNzIEFwcCB7XHJcblx0Ly8gQXBwbGljYXRpb24gQ29uc3RydWN0b3JcclxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xyXG5cdH1cclxuXHQvLyBCaW5kIEV2ZW50IExpc3RlbmVyc1xyXG5cdC8vXHJcblx0Ly8gQmluZCBhbnkgZXZlbnRzIHRoYXQgYXJlIHJlcXVpcmVkIG9uIHN0YXJ0dXAuIENvbW1vbiBldmVudHMgYXJlOlxyXG5cdC8vICdsb2FkJywgJ2RldmljZXJlYWR5JywgJ29mZmxpbmUnLCBhbmQgJ29ubGluZScuXHJcblx0cHVibGljIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMub25EZXZpY2VSZWFkeSwgZmFsc2UpO1xyXG5cdH1cclxuXHQvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXHJcblx0Ly9cclxuXHQvLyBUaGUgc2NvcGUgb2YgJ3RoaXMnIGlzIHRoZSBldmVudC4gSW4gb3JkZXIgdG8gY2FsbCB0aGUgJ3JlY2VpdmVkRXZlbnQnXHJcblx0Ly8gZnVuY3Rpb24sIHdlIG11c3QgZXhwbGljaXRseSBjYWxsICdhcHAucmVjZWl2ZWRFdmVudCguLi4pOydcclxuXHRwdWJsaWMgb25EZXZpY2VSZWFkeSA9ICgpID0+IHtcclxuXHRcdHRoaXMucmVjZWl2ZWRFdmVudCgnZGV2aWNlcmVhZHknKTtcclxuXHRcdChmdW5jdGlvbigkKSB7XHJcblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5kZXZpY2VyZWFkeScpLmFwcGVuZCgnPHA+c3RhcnRlZDwvcD4nKTtcclxuXHRcdFx0XHQkLmdldCgndGVtcGxhdGVzLmh0bWwnKS50aGVuKGZ1bmN0aW9uKHRlbXBsYXRlcykge1xyXG5cdFx0XHRcdFx0JCgnLnRlbXBsYXRlcycpLmh0bWwodGVtcGxhdGVzKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSkoalF1ZXJ5KTtcclxuXHR9O1xyXG5cdC8vIFVwZGF0ZSBET00gb24gYSBSZWNlaXZlZCBFdmVudFxyXG5cdHB1YmxpYyByZWNlaXZlZEV2ZW50KGlkKSB7XHJcblx0XHR2YXIgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRcdHZhciBsaXN0ZW5pbmdFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdGVuaW5nJyk7XHJcblx0XHR2YXIgcmVjZWl2ZWRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmVjZWl2ZWQnKTtcclxuXHRcclxuXHRcdGxpc3RlbmluZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7Jyk7XHJcblx0XHRyZWNlaXZlZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrOycpO1xyXG5cdFxyXG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIEV2ZW50OiAnICsgaWQpO1xyXG5cdH1cclxufVxyXG5cclxudmFyIGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLmluaXRpYWxpemUoKTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vcmVmZXJlbmNlcy5kLnRzXCIgLz5cclxuXHJcbmNsYXNzIFBhZ2VWaWV3TW9kZWwge1xyXG5cdFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3JlZmVyZW5jZXMuZC50c1wiIC8+XHJcblxyXG5jbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgUGFnZVZpZXdNb2RlbCB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9