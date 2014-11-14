/// <reference path="../../references.d.ts" />
/// <reference path="../../viewmodels/AccompanyViewModel.ts" />

class EditViewModel implements IPageViewModel {

	public accompany : AccompanyViewModel;

	public static factory() {
		return new EditViewModel();
	}

	constructor() {
		ko.track(this);
	}

	public getName() {
		return 'edit';
	}

	public getTemplate() {
		return 'pages/edit/EditView.t.html';
	}

	public initialize(context) {
		// TODO context.id が指定されていれば 添乗記録をロード
		// TODO 指定されていなければ　新規作成
	}
	
	public register = () => {
		// TODO 下車登録
		page('/');
	};
	
	public back() {
		page('/');
	}

}