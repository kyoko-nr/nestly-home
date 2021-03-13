# look-back-on-2020

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Heroku セットアップ関連

### 参考にした記事のURLはこちら↓
https://qiita.com/kottyan/items/dbc1edb82e8562235fac

### Heroku サーバアップ用フレームワーク Express のインストール
```
npm install express --save
```

### プロジェクトのルートディレクトリに「server.js」を作成し、以下の記述を行う
```
/* eslint-disable @typescript-eslint/no-var-requires */
// server.js
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
```
以下のコマンドでserver.jsを実行すると以下のURLからHerokuで立ち上がるアプリを確認できる。
http://localhost:5000
```
node server.js
```

### package.jsonの編集
package.jsonの"scripts"の中に以下の記述を追記する。
```
"start": "node server.js",
```

### .gitignoreの編集
.gitignoreに「dist/」の記述がある場合は削除する。
　※Herokuにgit経由でデプロイするため

### Heroku リモートリポジトリ設定
```
heroku git:remote --app <プロジェクト名>
```

### Herokuへログイン
```
heroku login
```

### Herokuのリポジトリにpush
※push前にaddとcommitを忘れずに！
```
git push heroku
```

### Heroku URL
https://look-back-on-2020.herokuapp.com/
