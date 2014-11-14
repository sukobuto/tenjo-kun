/// <reference path="../references.d.ts" />

class PageViewModel implements IPageViewModel {

	public getName() : string {
		throw new Error('getName method is not implemented.');
	}

	public getTemplate() : string {
		throw new Error('getTemplate method is not implemented.');
	}

	public initialize(context : any) : void {

	}

	public static factory() : PageViewModel {
		throw new Error('factory method is not implemented.');
	}
	
}

interface IPageViewModel {

	/**
	 * ページ名を取得するメソッド
	 */
	getName() : string

	/**
	 * ページごとのテンプレートIDを取得するメソッド
	 */
	getTemplate() : string

	/**
	 * 遷移後に呼び出されるイベントメソッド
	 * @param context
	 */
	initialize(context : any) : void
	
}