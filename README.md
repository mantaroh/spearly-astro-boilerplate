![Group 1](https://user-images.githubusercontent.com/3241026/206891849-a1373663-7ce8-4f57-a416-c506fb0d351f.png)


# Spearly meets Astro 🚀

このレポジトリは、Spearly CMS のコンテンツを Astro を使って静的サイトジェネレートするプロジェクトです。

以下のボタンから自身のレポジトリにコピー＆Netlifyデプロイが出来ます。

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mantaroh/spearly-astro-boilerplate)

## 利用方法

### Spearly CMS コンテンツの作成

https://cms.spearly.com にアクセスしてアカウントを登録後に、コンテンツを作成してください。

このボイラープレートが想定しているコンテンツは以下の通りです。

| フィールド名 | フィールドタイプ |
| - | - |
| title | テキスト |
| date | カレンダー |
| description | テキスト |
| image | 画像 |
| body | リッチテキスト |

### Spearly CMS API キーの設定

https://cms.spearly.com のチーム設定にある API キーを取得して、`.env` ファイルに設定します。

設定例：

```bash
SPEARLY_API_KEY=ABCDEFGHIJKLMNOPQRSTU
```

## ビルド方法

```bash
$npm install
$npm run build
```

`dist` ディレクトリに静的サイトが生成されます

## テスト実行

```bash
$npm install
$npm run dev
```

http://localhost:3000 にアクセスするとテスト環境での実行が出来ます。
