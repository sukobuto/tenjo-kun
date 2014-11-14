/// <reference path="../../references.d.ts" />
/// <reference path="../../viewmodels/AccompanyViewModel.ts" />

class HomeViewModel implements IPageViewModel {
	
	public static instance : HomeViewModel;
	public accompanies : AccompanyViewModel[] = [];
	
	public static factory() {
		if (HomeViewModel.instance) return HomeViewModel.instance;
		return HomeViewModel.instance = new HomeViewModel();
	}
	
	constructor() {
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
		// 
	}
	
	public createNew() {
		page('/new');
	}

}