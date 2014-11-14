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
    PageViewModel.prototype.initialize = function (context) {
    };
    PageViewModel.factory = function () {
        throw new Error('factory method is not implemented.');
    };
    return PageViewModel;
})();


/// <reference path="../references.d.ts" />
/**
 * 添乗記録 ViewModel
 */
var AccompanyViewModel = (function () {
    function AccompanyViewModel() {
        this.note = "";
        ko.track(this);
    }
    return AccompanyViewModel;
})();


/// <reference path="../../references.d.ts" />
/// <reference path="../../viewmodels/AccompanyViewModel.ts" />
var EditViewModel = (function () {
    function EditViewModel() {
        this.register = function () {
            // TODO 下車登録
            page.show('/');
        };
        ko.track(this);
    }
    EditViewModel.factory = function () {
        return new EditViewModel();
    };
    EditViewModel.prototype.getName = function () {
        return 'edit';
    };
    EditViewModel.prototype.getTemplate = function () {
        return 'pages/edit/EditView.t.html';
    };
    EditViewModel.prototype.initialize = function (context) {
        // TODO context.id が指定されていれば 添乗記録をロード
        // TODO 指定されていなければ　新規作成
    };
    EditViewModel.prototype.back = function () {
        page.show('/');
    };
    return EditViewModel;
})();


/// <reference path="../../references.d.ts" />
/// <reference path="../../viewmodels/AccompanyViewModel.ts" />
var HomeViewModel = (function () {
    function HomeViewModel() {
        this.accompanies = [];
        ko.track(this);
    }
    HomeViewModel.factory = function () {
        if (HomeViewModel.instance)
            return HomeViewModel.instance;
        return HomeViewModel.instance = new HomeViewModel();
    };
    HomeViewModel.prototype.getName = function () {
        return 'home';
    };
    HomeViewModel.prototype.getTemplate = function () {
        return 'pages/home/HomeView.t.html';
    };
    HomeViewModel.prototype.initialize = function (context) {
        // TODO strage から添乗記録をロード
        // TODO 下車未登録の添乗記録があったら accompany へ遷移 with AccompanyViewModelId
        // 
    };
    HomeViewModel.prototype.createNew = function () {
        page.show('/new');
    };
    return HomeViewModel;
})();


/// <reference path="../typings/tsd.d.ts"/>
var App = (function () {
    function App() {
        var _this = this;
        this.page = HomeViewModel.factory();
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        this.onDeviceReady = function () {
            _this.receivedEvent('deviceready');
            ko.applyBindings(_this);
            _this.declareRoutes();
        };
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
    App.prototype.initializeViewModel = function (context) {
        console.log(context);
        this.page.initialize(context);
    };
    App.prototype.declareRoutes = function () {
        var _this = this;
        page('#/', function () { return _this.page = HomeViewModel.factory(); }, this.initializeViewModel);
        page('#/new', function () { return _this.page = EditViewModel.factory(); }, this.initializeViewModel);
        page('#/edit/:id', function () { return _this.page = EditViewModel.factory(); }, this.initializeViewModel);
        page();
    };
    return App;
})();
var app = new App();
app.initialize();



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9wYWdlcy9QYWdlVmlld01vZGVsLnRzIiwiQzovVXNlcnMvS2VudGEvUGhwc3Rvcm1Qcm9qZWN0cy90ZW5qby1rdW4vdmlld21vZGVscy9BY2NvbXBhbnlWaWV3TW9kZWwudHMiLCJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9wYWdlcy9lZGl0L0VkaXRWaWV3TW9kZWwudHMiLCJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9wYWdlcy9ob21lL0hvbWVWaWV3TW9kZWwudHMiLCJDOi9Vc2Vycy9LZW50YS9QaHBzdG9ybVByb2plY3RzL3RlbmpvLWt1bi9BcHAudHMiXSwibmFtZXMiOlsiUGFnZVZpZXdNb2RlbCIsIlBhZ2VWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJQYWdlVmlld01vZGVsLmdldE5hbWUiLCJQYWdlVmlld01vZGVsLmdldFRlbXBsYXRlIiwiUGFnZVZpZXdNb2RlbC5pbml0aWFsaXplIiwiUGFnZVZpZXdNb2RlbC5mYWN0b3J5IiwiQWNjb21wYW55Vmlld01vZGVsIiwiQWNjb21wYW55Vmlld01vZGVsLmNvbnN0cnVjdG9yIiwiRWRpdFZpZXdNb2RlbCIsIkVkaXRWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJFZGl0Vmlld01vZGVsLmZhY3RvcnkiLCJFZGl0Vmlld01vZGVsLmdldE5hbWUiLCJFZGl0Vmlld01vZGVsLmdldFRlbXBsYXRlIiwiRWRpdFZpZXdNb2RlbC5pbml0aWFsaXplIiwiRWRpdFZpZXdNb2RlbC5iYWNrIiwiSG9tZVZpZXdNb2RlbCIsIkhvbWVWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJIb21lVmlld01vZGVsLmZhY3RvcnkiLCJIb21lVmlld01vZGVsLmdldE5hbWUiLCJIb21lVmlld01vZGVsLmdldFRlbXBsYXRlIiwiSG9tZVZpZXdNb2RlbC5pbml0aWFsaXplIiwiSG9tZVZpZXdNb2RlbC5jcmVhdGVOZXciLCJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuaW5pdGlhbGl6ZSIsIkFwcC5iaW5kRXZlbnRzIiwiQXBwLnJlY2VpdmVkRXZlbnQiLCJBcHAuaW5pdGlhbGl6ZVZpZXdNb2RlbCIsIkFwcC5kZWNsYXJlUm91dGVzIl0sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFFM0MsSUFBTSxhQUFhO0lBQW5CQSxTQUFNQSxhQUFhQTtJQWtCbkJDLENBQUNBO0lBaEJPRCwrQkFBT0EsR0FBZEE7UUFDQ0UsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0Esb0NBQW9DQSxDQUFDQSxDQUFDQTtJQUN2REEsQ0FBQ0E7SUFFTUYsbUNBQVdBLEdBQWxCQTtRQUNDRyxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSx3Q0FBd0NBLENBQUNBLENBQUNBO0lBQzNEQSxDQUFDQTtJQUVNSCxrQ0FBVUEsR0FBakJBLFVBQWtCQSxPQUFhQTtJQUUvQkksQ0FBQ0E7SUFFYUoscUJBQU9BLEdBQXJCQTtRQUNDSyxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLENBQUNBLENBQUNBO0lBQ3ZEQSxDQUFDQTtJQUVGTCxvQkFBQ0E7QUFBREEsQ0FBQ0EsSUFBQTtBQW9CQTs7QUN4Q0QsMkNBQTJDO0FBSzNDOztHQURHO0lBQ0csa0JBQWtCO0lBSXZCTSxTQUpLQSxrQkFBa0JBO1FBRWhCQyxTQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUdoQkEsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBRUZELHlCQUFDQTtBQUFEQSxDQUFDQSxJQUFBOzs7QUNiRCw4Q0FBOEM7QUFDOUMsK0RBQStEO0FBRS9ELElBQU0sYUFBYTtJQVFsQkUsU0FSS0EsYUFBYUE7UUF5QlhDLGFBQVFBLEdBQUdBO1lBRWpCQSxZQURZQTtZQUNaQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNoQkEsQ0FBQ0EsQ0FB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ZXJlbmNlcy5kLnRzXCIgLz5cclxuXHJcbmNsYXNzIFBhZ2VWaWV3TW9kZWwgaW1wbGVtZW50cyBJUGFnZVZpZXdNb2RlbCB7XHJcblxyXG5cdHB1YmxpYyBnZXROYW1lKCkgOiBzdHJpbmcge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdnZXROYW1lIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuJyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0VGVtcGxhdGUoKSA6IHN0cmluZyB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2dldFRlbXBsYXRlIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuJyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5pdGlhbGl6ZShjb250ZXh0IDogYW55KSA6IHZvaWQge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZmFjdG9yeSgpIDogUGFnZVZpZXdNb2RlbCB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZhY3RvcnkgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUGFnZVZpZXdNb2RlbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIOODmuODvOOCuOWQjeOCkuWPluW+l+OBmeOCi+ODoeOCveODg+ODiVxyXG5cdCAqL1xyXG5cdGdldE5hbWUoKSA6IHN0cmluZ1xyXG5cclxuXHQvKipcclxuXHQgKiDjg5rjg7zjgrjjgZTjgajjga7jg4bjg7Pjg5fjg6zjg7zjg4hJROOCkuWPluW+l+OBmeOCi+ODoeOCveODg+ODiVxyXG5cdCAqL1xyXG5cdGdldFRlbXBsYXRlKCkgOiBzdHJpbmdcclxuXHJcblx0LyoqXHJcblx0ICog6YG356e75b6M44Gr5ZG844Gz5Ye644GV44KM44KL44Kk44OZ44Oz44OI44Oh44K944OD44OJXHJcblx0ICogQHBhcmFtIGNvbnRleHRcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKGNvbnRleHQgOiBhbnkpIDogdm9pZFxyXG5cdFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3JlZmVyZW5jZXMuZC50c1wiIC8+XHJcblxyXG4vKipcclxuICog5re75LmX6KiY6YyyIFZpZXdNb2RlbFxyXG4gKi9cclxuY2xhc3MgQWNjb21wYW55Vmlld01vZGVsIHtcclxuXHRcclxuXHRwdWJsaWMgbm90ZSA9IFwiXCI7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRrby50cmFjayh0aGlzKTtcclxuXHR9XHJcblx0XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vcmVmZXJlbmNlcy5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3ZpZXdtb2RlbHMvQWNjb21wYW55Vmlld01vZGVsLnRzXCIgLz5cclxuXHJcbmNsYXNzIEVkaXRWaWV3TW9kZWwgaW1wbGVtZW50cyBJUGFnZVZpZXdNb2RlbCB7XHJcblxyXG5cdHB1YmxpYyBhY2NvbXBhbnkgOiBBY2NvbXBhbnlWaWV3TW9kZWw7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZmFjdG9yeSgpIHtcclxuXHRcdHJldHVybiBuZXcgRWRpdFZpZXdNb2RlbCgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRrby50cmFjayh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuICdlZGl0JztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRUZW1wbGF0ZSgpIHtcclxuXHRcdHJldHVybiAncGFnZXMvZWRpdC9FZGl0Vmlldy50Lmh0bWwnO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXRpYWxpemUoY29udGV4dCkge1xyXG5cdFx0Ly8gVE9ETyBjb250ZXh0LmlkIOOBjOaMh+WumuOBleOCjOOBpuOBhOOCjOOBsCDmt7vkuZfoqJjpjLLjgpLjg63jg7zjg4lcclxuXHRcdC8vIFRPRE8g5oyH5a6a44GV44KM44Gm44GE44Gq44GR44KM44Gw44CA5paw6KaP5L2c5oiQXHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyByZWdpc3RlciA9ICgpID0+IHtcclxuXHRcdC8vIFRPRE8g5LiL6LuK55m76YyyXHJcblx0XHRwYWdlLnNob3coJy8nKTtcclxuXHR9O1xyXG5cdFxyXG5cdHB1YmxpYyBiYWNrKCkge1xyXG5cdFx0cGFnZS5zaG93KCcvJyk7XHJcblx0fVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9yZWZlcmVuY2VzLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdmlld21vZGVscy9BY2NvbXBhbnlWaWV3TW9kZWwudHNcIiAvPlxyXG5cclxuY2xhc3MgSG9tZVZpZXdNb2RlbCBpbXBsZW1lbnRzIElQYWdlVmlld01vZGVsIHtcclxuXHRcclxuXHRwdWJsaWMgc3RhdGljIGluc3RhbmNlIDogSG9tZVZpZXdNb2RlbDtcclxuXHRwdWJsaWMgYWNjb21wYW5pZXMgOiBBY2NvbXBhbnlWaWV3TW9kZWxbXSA9IFtdO1xyXG5cdFxyXG5cdHB1YmxpYyBzdGF0aWMgZmFjdG9yeSgpIHtcclxuXHRcdGlmIChIb21lVmlld01vZGVsLmluc3RhbmNlKSByZXR1cm4gSG9tZVZpZXdNb2RlbC5pbnN0YW5jZTtcclxuXHRcdHJldHVybiBIb21lVmlld01vZGVsLmluc3RhbmNlID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcclxuXHR9XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRrby50cmFjayh0aGlzKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gJ2hvbWUnO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0VGVtcGxhdGUoKSB7XHJcblx0XHRyZXR1cm4gJ3BhZ2VzL2hvbWUvSG9tZVZpZXcudC5odG1sJztcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGluaXRpYWxpemUoY29udGV4dCkge1xyXG5cdFx0Ly8gVE9ETyBzdHJhZ2Ug44GL44KJ5re75LmX6KiY6Yyy44KS44Ot44O844OJXHJcblx0XHQvLyBUT0RPIOS4i+i7iuacqueZu+mMsuOBrua3u+S5l+iomOmMsuOBjOOBguOBo+OBn+OCiSBhY2NvbXBhbnkg44G46YG356e7IHdpdGggQWNjb21wYW55Vmlld01vZGVsSWRcclxuXHRcdC8vIFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgY3JlYXRlTmV3KCkge1xyXG5cdFx0cGFnZS5zaG93KCcvbmV3Jyk7XHJcblx0fVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRwdWJsaWMgcGFnZSA6UGFnZVZpZXdNb2RlbCA9IEhvbWVWaWV3TW9kZWwuZmFjdG9yeSgpO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0a28udHJhY2sodGhpcyk7XHJcblx0fVxyXG5cdFxyXG5cdC8vIEFwcGxpY2F0aW9uIENvbnN0cnVjdG9yXHJcblx0cHVibGljIGluaXRpYWxpemUoKSB7XHJcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcclxuXHR9XHJcblx0Ly8gQmluZCBFdmVudCBMaXN0ZW5lcnNcclxuXHQvL1xyXG5cdC8vIEJpbmQgYW55IGV2ZW50cyB0aGF0IGFyZSByZXF1aXJlZCBvbiBzdGFydHVwLiBDb21tb24gZXZlbnRzIGFyZTpcclxuXHQvLyAnbG9hZCcsICdkZXZpY2VyZWFkeScsICdvZmZsaW5lJywgYW5kICdvbmxpbmUnLlxyXG5cdHB1YmxpYyBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLm9uRGV2aWNlUmVhZHksIGZhbHNlKTtcclxuXHR9XHJcblx0Ly8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxyXG5cdC8vXHJcblx0Ly8gVGhlIHNjb3BlIG9mICd0aGlzJyBpcyB0aGUgZXZlbnQuIEluIG9yZGVyIHRvIGNhbGwgdGhlICdyZWNlaXZlZEV2ZW50J1xyXG5cdC8vIGZ1bmN0aW9uLCB3ZSBtdXN0IGV4cGxpY2l0bHkgY2FsbCAnYXBwLnJlY2VpdmVkRXZlbnQoLi4uKTsnXHJcblx0cHVibGljIG9uRGV2aWNlUmVhZHkgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnJlY2VpdmVkRXZlbnQoJ2RldmljZXJlYWR5Jyk7XHJcblx0XHRrby5hcHBseUJpbmRpbmdzKHRoaXMpO1xyXG5cdFx0dGhpcy5kZWNsYXJlUm91dGVzKCk7XHJcblx0fTtcclxuXHQvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcclxuXHRwdWJsaWMgcmVjZWl2ZWRFdmVudChpZCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIEV2ZW50OiAnICsgaWQpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgaW5pdGlhbGl6ZVZpZXdNb2RlbChjb250ZXh0IDogYW55KSA6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coY29udGV4dCk7XHJcblx0XHR0aGlzLnBhZ2UuaW5pdGlhbGl6ZShjb250ZXh0KTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGRlY2xhcmVSb3V0ZXMoKSB7XHJcblx0XHRwYWdlKCcjLycsICgpID0+IHRoaXMucGFnZSA9IEhvbWVWaWV3TW9kZWwuZmFjdG9yeSgpLCB0aGlzLmluaXRpYWxpemVWaWV3TW9kZWwpO1xyXG5cdFx0cGFnZSgnIy9uZXcnLCAoKSA9PiB0aGlzLnBhZ2UgPSBFZGl0Vmlld01vZGVsLmZhY3RvcnkoKSwgdGhpcy5pbml0aWFsaXplVmlld01vZGVsKTtcclxuXHRcdHBhZ2UoJyMvZWRpdC86aWQnLCAoKSA9PiB0aGlzLnBhZ2UgPSBFZGl0Vmlld01vZGVsLmZhY3RvcnkoKSwgdGhpcy5pbml0aWFsaXplVmlld01vZGVsKTtcclxuXHRcdHBhZ2UoKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0aWFsaXplKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9