/// <reference path="../di/DependencyInjectable.ts" />

module tj {

	export class PageViewModel extends DependencyInjectable {

		/**
		 * ページ名を取得するメソッド
		 */
		public getName() : string {
			throw new Error('getName method is not implemented.');
		}

		/**
		 * ページごとのテンプレートIDを取得するメソッド
		 */
		public getTemplate() : string {
			throw new Error('getTemplate method is not implemented.');
		}

		/**
		 * 遷移後に呼び出されるイベントメソッド
		 * @param context
		 */
		public initialize(context : any) : void {

		}

		public static factory() : PageViewModel {
			throw new Error('factory method is not implemented.');
		}

	}
	
}