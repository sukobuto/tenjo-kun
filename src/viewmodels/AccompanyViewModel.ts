/// <reference path="../references.d.ts" />

module tj {

	/**
	 * 添乗記録 ViewModel
	 */
	export class AccompanyViewModel {

		public id : number;
		public board_at : number;
		public alight_at : number;
		public weather : string;
		public board_station : string;
		public alight_station : string;
		public crew : string;
		public car_number : number;
		public note = "";

		constructor(data? : any) {
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

	}
	
}