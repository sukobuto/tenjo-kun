tenjo-kun
=========

Cordova4 + TypeScript + KnockoutJS + Ratchet でビジネス系アプリ開発の練習

### 現状

Hello World として、まず ko.applyBindings が効いたことを確認。

### 部品やページごとに分割して書いた View をいかにして読み込むか

ローカル環境 (Windows) の `cordova run browser` 環境だとクロスオリジンエラーで ajax による
読み込みができないし、AMD による読み込みもよくわからない。

今回は Gulp を駆使して index.html にテンプレートとして直接はめ込むことで対応した。