/// <reference path="../references.d.ts" />

/**
 * 添乗記録 ViewModel
 */
class AccompanyViewModel {
	
	public note = "";
	
	constructor() {
		ko.track(this);
	}
	
}