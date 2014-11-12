/// <reference path="../../references.d.ts" />

class HomeViewModel extends PageViewModel {
	
	public getName() {
		return 'home';
	}
	
	public getTemplate() {
		return 'pages/home/HomeView.t.html';
	}

}