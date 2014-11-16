/// <reference path="../references.d.ts" />
var tj;
(function (tj) {
    var DependencyInjectable = (function () {
        function DependencyInjectable() {
        }
        Object.defineProperty(DependencyInjectable.prototype, "di", {
            get: function () {
                if (!this._di)
                    return tj.DependencyInjector.getDefault();
                return this._di;
            },
            set: function (di) {
                this._di = di;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DependencyInjectable.prototype, "autoCompleteSources", {
            // application services
            get: function () {
                return this.di.get('autoCompleteSources');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DependencyInjectable.prototype, "preference", {
            get: function () {
                return this.di.get('preference');
            },
            enumerable: true,
            configurable: true
        });
        return DependencyInjectable;
    })();
    tj.DependencyInjectable = DependencyInjectable;
})(tj || (tj = {}));
/// <reference path="../di/DependencyInjectable.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tj;
(function (tj) {
    var PageViewModel = (function (_super) {
        __extends(PageViewModel, _super);
        function PageViewModel() {
            _super.apply(this, arguments);
        }
        /**
         * ページ名を取得するメソッド
         */
        PageViewModel.prototype.getName = function () {
            throw new Error('getName method is not implemented.');
        };
        /**
         * ページごとのテンプレートIDを取得するメソッド
         */
        PageViewModel.prototype.getTemplate = function () {
            throw new Error('getTemplate method is not implemented.');
        };
        /**
         * 遷移後に呼び出されるイベントメソッド
         * @param context
         */
        PageViewModel.prototype.initialize = function (context) {
        };
        PageViewModel.factory = function () {
            throw new Error('factory method is not implemented.');
        };
        return PageViewModel;
    })(tj.DependencyInjectable);
    tj.PageViewModel = PageViewModel;
})(tj || (tj = {}));
/// <reference path="../references.d.ts" />
var tj;
(function (tj) {
    /**
     * 添乗記録 ViewModel
     */
    var AccompanyViewModel = (function () {
        function AccompanyViewModel(data) {
            this.note = "";
            if (data) {
                this.id = data.id;
                this.board_at = data.board_at || null;
                this.alight_at = data.alight_at || null;
                this.weather = data.weather || null;
                this.board_station = data.board_station || null;
                this.alight_station = data.alight_station || null;
                this.crew = data.crew || null;
                this.car_number = data.car_number || null;
                this.note = data.note || null;
            }
            ko.track(this);
        }
        return AccompanyViewModel;
    })();
    tj.AccompanyViewModel = AccompanyViewModel;
})(tj || (tj = {}));
/// <reference path="../../references.d.ts" />
/// <reference path="../../viewmodels/AccompanyViewModel.ts" />
var tj;
(function (tj) {
    var HomeViewModel = (function (_super) {
        __extends(HomeViewModel, _super);
        function HomeViewModel() {
            _super.call(this);
            this.accompanies = [];
            this.testProperty = '';
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
            console.log(context);
            this.testProperty = this.preference.get('test');
            console.log(this.preference.get('test'));
        };
        HomeViewModel.prototype.createNew = function () {
            page('/new');
        };
        HomeViewModel.prototype.edit = function (accompany) {
            page('/edit/' + accompany.id);
        };
        return HomeViewModel;
    })(tj.PageViewModel);
    tj.HomeViewModel = HomeViewModel;
})(tj || (tj = {}));
/// <reference path="../../references.d.ts" />
/// <reference path="../../viewmodels/AccompanyViewModel.ts" />
var tj;
(function (tj) {
    var EditViewModel = (function (_super) {
        __extends(EditViewModel, _super);
        function EditViewModel() {
            _super.call(this);
            this.register = function () {
                // TODO 下車登録
                page('/');
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
            page('/');
        };
        return EditViewModel;
    })(tj.PageViewModel);
    tj.EditViewModel = EditViewModel;
})(tj || (tj = {}));
/// <reference path="../references.d.ts" />
var tj;
(function (tj) {
    var DependencyInjector = (function () {
        function DependencyInjector() {
            this.services = {};
            this.shared_instances = {};
        }
        DependencyInjector.getDefault = function () {
            return this._default;
        };
        DependencyInjector.setDefault = function (_default) {
            this._default = _default;
        };
        DependencyInjector.factoryDefault = function () {
            return this._default = new DependencyInjector();
        };
        DependencyInjector.prototype.set = function (name, service, shared) {
            this.services[name] = service;
            service._shared = shared || false;
            return this;
        };
        DependencyInjector.prototype.get = function (name, shared) {
            if (!this.services.hasOwnProperty(name)) {
                throw Error('Service' + name + ' not found.');
            }
            var service = this.services[name];
            if (typeof service == 'function') {
                if (service._shared || shared) {
                    if (this.shared_instances.hasOwnProperty(name)) {
                        return this.shared_instances[name];
                    }
                    else {
                        return this.shared_instances[name] = service();
                    }
                }
                else {
                    return service();
                }
            }
            else {
                return service;
            }
        };
        return DependencyInjector;
    })();
    tj.DependencyInjector = DependencyInjector;
})(tj || (tj = {}));
/// <reference path="../references.d.ts" />
var tj;
(function (tj) {
    /**
     * オートコンプリートの候補を提供する
     */
    var AutoCompleteSource = (function () {
        function AutoCompleteSource(resource_id) {
            this._source = [];
            this.load();
            ko.track(this);
        }
        Object.defineProperty(AutoCompleteSource.prototype, "source", {
            get: function () {
                return this._source;
            },
            enumerable: true,
            configurable: true
        });
        AutoCompleteSource.prototype.load = function () {
            // TODO load from database
            return this;
        };
        AutoCompleteSource.prototype.save = function () {
            // TODO save into database
            return this;
        };
        AutoCompleteSource.prototype.add = function (keyword) {
            this._source.push(keyword);
            return this;
        };
        AutoCompleteSource.prototype.remove = function (keyword) {
            this._source.remove(keyword);
            return this;
        };
        return AutoCompleteSource;
    })();
    tj.AutoCompleteSource = AutoCompleteSource;
})(tj || (tj = {}));
/// <reference path="../references.d.ts" />
var tj;
(function (tj) {
    /**
     * 設定サービス
     */
    var Preference = (function () {
        function Preference() {
            this.data = [];
        }
        Preference.prototype.load = function () {
            // todo load from database
            this.data['test'] = 'これはテストです';
            return this;
        };
        Preference.prototype.save = function () {
            // todo save into database
            return this;
        };
        Preference.prototype.get = function (key) {
            return this.data[key];
        };
        Preference.prototype.set = function (key, value) {
            this.data[key] = value;
            return this;
        };
        return Preference;
    })();
    tj.Preference = Preference;
})(tj || (tj = {}));
/// <reference path="references.d.ts" />
var tj;
(function (tj) {
    var App = (function () {
        function App() {
            var _this = this;
            this.page = tj.HomeViewModel.factory();
            // deviceready Event Handler
            //
            // The scope of 'this' is the event. In order to call the 'receivedEvent'
            // function, we must explicitly call 'app.receivedEvent(...);'
            this.onDeviceReady = function () {
                _this.receivedEvent('deviceready');
                _this.declareServices();
                ko.punches.enableAll();
                ko.applyBindings(_this);
                _this.declareRoutes();
                _this.page.initialize({});
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
            page('/', function () { return _this.page = tj.HomeViewModel.factory(); }, this.initializeViewModel);
            page('/new', function () { return _this.page = tj.EditViewModel.factory(); }, this.initializeViewModel);
            page('/edit/:id', function () { return _this.page = tj.EditViewModel.factory(); }, this.initializeViewModel);
            page();
        };
        App.prototype.declareServices = function () {
            var di = tj.DependencyInjector.factoryDefault();
            di.set('autoCompleteSources', function () {
                return {
                    stations: new tj.AutoCompleteSource('stations'),
                    crews: new tj.AutoCompleteSource('crews')
                };
            }, true);
            di.set('preference', function () {
                var preference = new tj.Preference();
                preference.load();
                return preference;
            }, true);
        };
        return App;
    })();
    tj.App = App;
    tj.app = new tj.App();
    tj.app.initialize();
})(tj || (tj = {}));
