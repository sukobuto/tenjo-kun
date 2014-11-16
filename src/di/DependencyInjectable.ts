/// <reference path="../references.d.ts" />

module tj {
	export class DependencyInjectable {
		
		private _di : DependencyInjector;
		
		get di() : DependencyInjector {
			if (!this._di) return DependencyInjector.getDefault();
			return this._di;
		}
		
		set di(di : DependencyInjector) {
			this._di = di;
		}
		
		// application services
		
		get autoCompleteSources() : { [index:string]:AutoCompleteSource } {
			return this.di.get('autoCompleteSources');
		}
		
		get preference() : Preference {
			return this.di.get('preference');
		}
		
	}
}