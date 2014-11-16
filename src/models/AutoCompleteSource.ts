/// <reference path="../references.d.ts" />

module tj {

	/**
	 * オートコンプリートの候補を提供する
	 */
	export class AutoCompleteSource {
		
		private resource_id : string;
		private _source : string[] = [];
		
		get source() : string[] {
			return this._source;
		}
		
		constructor(resource_id : string) {
			this.load();
			ko.track(this);
		}
		
		public load() : AutoCompleteSource {
			// TODO load from database
			return this;
		}
		
		public save() : AutoCompleteSource {
			// TODO save into database
			return this;
		}
		
		public add(keyword : string) : AutoCompleteSource {
			this._source.push(keyword);
			return this;
		}
		
		public remove(keyword : string) : AutoCompleteSource {
			this._source.remove(keyword);
			return this;
		}
		
	}
	
}
