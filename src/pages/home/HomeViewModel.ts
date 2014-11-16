/// <reference path="../../references.d.ts" />
/// <reference path="../../viewmodels/AccompanyViewModel.ts" />

module tj {
	
	export class HomeViewModel extends PageViewModel {

		public static instance : HomeViewModel;
		public accompanies : AccompanyViewModel[] = [];
		public testProperty : string = '';

		public static factory() {
			if (HomeViewModel.instance) return HomeViewModel.instance;
			return HomeViewModel.instance = new HomeViewModel();
		}

		constructor() {
			super();
			ko.track(this);
		}

		public getName() {
			return 'home';
		}

		public getTemplate() {
			return 'pages/home/HomeView.t.html';
		}

		public initialize(context) {
			// TODO strage から添乗記録をロード
			// TODO 下車未登録の添乗記録があったら accompany へ遷移 with AccompanyViewModelId
			console.log(context);
			this.testProperty = this.preference.get('test');
			console.log(this.preference.get('test'));
		}

		public createNew() {
			page('/new');
		}

		public edit(accompany) {
			page('/edit/' + accompany.id);
		}

	}
	
}