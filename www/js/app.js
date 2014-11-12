/// <reference path="../references.d.ts" />
var PageViewModel = (function () {
    function PageViewModel() {
    }
    PageViewModel.prototype.getName = function () {
        throw new Error('getName method is not implemented.');
    };
    PageViewModel.prototype.getTemplate = function () {
        throw new Error('getTemplate method is not implemented.');
    };
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
    HomeViewModel.prototype.getName = function () {
        return 'home';
    };
    HomeViewModel.prototype.getTemplate = function () {
        return 'pages/home/HomeView.t.html';
    };
    return HomeViewModel;
})(PageViewModel);


/// <reference path="../typings/tsd.d.ts"/>
var App = (function () {
    function App() {
        var _this = this;
        this.page = 'home';
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        this.onDeviceReady = function () {
            _this.receivedEvent('deviceready');
            ko.applyBindings(_this);
        };
        var pages = this.pages = {
            'home': new HomeViewModel()
        };
        ko.track(pages);
        ko.track(this);
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
        console.log('Received Event: ' + id);
    };
    return App;
})();
var app = new App();
app.initialize();



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9wYWdlcy9QYWdlVmlld01vZGVsLnRzIiwiQzovVXNlcnMvS2VudGEvUGhwc3Rvcm1Qcm9qZWN0cy90ZW5qby1rdW4vcGFnZXMvaG9tZS9Ib21lVmlld01vZGVsLnRzIiwiQzovVXNlcnMvS2VudGEvUGhwc3Rvcm1Qcm9qZWN0cy90ZW5qby1rdW4vQXBwLnRzIl0sIm5hbWVzIjpbIlBhZ2VWaWV3TW9kZWwiLCJQYWdlVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiUGFnZVZpZXdNb2RlbC5nZXROYW1lIiwiUGFnZVZpZXdNb2RlbC5nZXRUZW1wbGF0ZSIsIkhvbWVWaWV3TW9kZWwiLCJIb21lVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiSG9tZVZpZXdNb2RlbC5nZXROYW1lIiwiSG9tZVZpZXdNb2RlbC5nZXRUZW1wbGF0ZSIsIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5pbml0aWFsaXplIiwiQXBwLmJpbmRFdmVudHMiLCJBcHAucmVjZWl2ZWRFdmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRTNDLElBQU0sYUFBYTtJQUFuQkEsU0FBTUEsYUFBYUE7SUFVbkJDLENBQUNBO0lBUk9ELCtCQUFPQSxHQUFkQTtRQUNDRSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLENBQUNBLENBQUNBO0lBQ3ZEQSxDQUFDQTtJQUVNRixtQ0FBV0EsR0FBbEJBO1FBQ0NHLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7SUFDM0RBLENBQUNBO0lBRUZILG9CQUFDQTtBQUFEQSxDQUFDQSxJQUFBOzs7QUNaRCw4Q0FBOEM7Ozs7Ozs7QUFFOUMsSUFBTSxhQUFhO0lBQVNJLFVBQXRCQSxhQUFhQSxVQUFzQkE7SUFBekNBLFNBQU1BLGFBQWFBO1FBQVNDLDhCQUFhQTtJQVV6Q0EsQ0FBQ0E7SUFST0QsK0JBQU9BLEdBQWRBO1FBQ0NFLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO0lBQ2ZBLENBQUNBO0lBRU1GLG1DQUFXQSxHQUFsQkE7UUFDQ0csTUFBTUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQTtJQUNyQ0EsQ0FBQ0E7SUFFRkgsb0JBQUNBO0FBQURBLENBQUNBLEVBVjJCLGFBQWEsRUFVeEM7OztBQ1pELDJDQUEyQztBQUUzQyxJQUFNLEdBQUc7SUFJUkksU0FKS0EsR0FBR0E7UUFBVEMsaUJBbUNDQTtRQWpDT0EsU0FBSUEsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFxQnJCQSw0QkFBNEJBO1FBQzVCQSxFQUFFQTtRQUNGQSx5RUFBeUVBO1FBQ3pFQSw4REFBOERBO1FBQ3ZEQSxrQkFBYUEsR0FBR0E7WUFDdEJBLEtBQUlBLENBQUNBLGFBQWFBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1lBQ2xDQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQTtRQUN4QkEsQ0FBQ0EsQ0FBQ0E7UUF6QkRBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBO1lBQ3hCQSxNQUFNQSxFQUFFQSxJQUFJQSxhQUFhQSxFQUFFQTtTQUMzQkEsQ0FBQ0E7UUFDRkEsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDaEJBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVERCwwQkFBMEJBO0lBQ25CQSx3QkFBVUEsR0FBakJBO1FBQ0NFLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO0lBQ25CQSxDQUFDQTtJQUNERix1QkFBdUJBO0lBQ3ZCQSxFQUFFQTtJQUNGQSxtRUFBbUVBO0lBQ25FQSxrREFBa0RBO0lBQzNDQSx3QkFBVUEsR0FBakJBO1FBQ0NHLFFBQVFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsYUFBYUEsRUFBRUEsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDckVBLENBQUNBO0lBU0RILGlDQUFpQ0E7SUFDMUJBLDJCQUFhQSxHQUFwQkEsVUFBcUJBLEVBQUVBO1FBQ3RCSSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBO0lBQ3RDQSxDQUFDQTtJQUNGSixVQUFDQTtBQUFEQSxDQUFDQSxJQUFBO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNwQixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vcmVmZXJlbmNlcy5kLnRzXCIgLz5cclxuXHJcbmNsYXNzIFBhZ2VWaWV3TW9kZWwge1xyXG5cclxuXHRwdWJsaWMgZ2V0TmFtZSgpIDogc3RyaW5nIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignZ2V0TmFtZSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLicpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0VGVtcGxhdGUoKSA6IHN0cmluZyB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2dldFRlbXBsYXRlIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuJyk7XHJcblx0fVxyXG5cdFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3JlZmVyZW5jZXMuZC50c1wiIC8+XHJcblxyXG5jbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgUGFnZVZpZXdNb2RlbCB7XHJcblx0XHJcblx0cHVibGljIGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gJ2hvbWUnO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0VGVtcGxhdGUoKSB7XHJcblx0XHRyZXR1cm4gJ3BhZ2VzL2hvbWUvSG9tZVZpZXcudC5odG1sJztcclxuXHR9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XHJcblxyXG5jbGFzcyBBcHAge1xyXG5cdHB1YmxpYyBwYWdlcyA6e1tuYW1lOnN0cmluZ106UGFnZVZpZXdNb2RlbH07XHJcblx0cHVibGljIHBhZ2UgPSAnaG9tZSc7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR2YXIgcGFnZXMgPSB0aGlzLnBhZ2VzID0ge1xyXG5cdFx0XHQnaG9tZSc6IG5ldyBIb21lVmlld01vZGVsKClcclxuXHRcdH07XHJcblx0XHRrby50cmFjayhwYWdlcyk7XHJcblx0XHRrby50cmFjayh0aGlzKTtcclxuXHR9XHJcblx0XHJcblx0Ly8gQXBwbGljYXRpb24gQ29uc3RydWN0b3JcclxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xyXG5cdH1cclxuXHQvLyBCaW5kIEV2ZW50IExpc3RlbmVyc1xyXG5cdC8vXHJcblx0Ly8gQmluZCBhbnkgZXZlbnRzIHRoYXQgYXJlIHJlcXVpcmVkIG9uIHN0YXJ0dXAuIENvbW1vbiBldmVudHMgYXJlOlxyXG5cdC8vICdsb2FkJywgJ2RldmljZXJlYWR5JywgJ29mZmxpbmUnLCBhbmQgJ29ubGluZScuXHJcblx0cHVibGljIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMub25EZXZpY2VSZWFkeSwgZmFsc2UpO1xyXG5cdH1cclxuXHQvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXHJcblx0Ly9cclxuXHQvLyBUaGUgc2NvcGUgb2YgJ3RoaXMnIGlzIHRoZSBldmVudC4gSW4gb3JkZXIgdG8gY2FsbCB0aGUgJ3JlY2VpdmVkRXZlbnQnXHJcblx0Ly8gZnVuY3Rpb24sIHdlIG11c3QgZXhwbGljaXRseSBjYWxsICdhcHAucmVjZWl2ZWRFdmVudCguLi4pOydcclxuXHRwdWJsaWMgb25EZXZpY2VSZWFkeSA9ICgpID0+IHtcclxuXHRcdHRoaXMucmVjZWl2ZWRFdmVudCgnZGV2aWNlcmVhZHknKTtcclxuXHRcdGtvLmFwcGx5QmluZGluZ3ModGhpcyk7XHJcblx0fTtcclxuXHQvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcclxuXHRwdWJsaWMgcmVjZWl2ZWRFdmVudChpZCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIEV2ZW50OiAnICsgaWQpO1xyXG5cdH1cclxufVxyXG5cclxudmFyIGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLmluaXRpYWxpemUoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=