
# vue-cli-plugin-paradise-soft-starter-template

使用 vue-cli 3 快速建立關於 vue 的起始模板

## 如何使用

1. 安裝 Vue CLI 3:

```bash
$ npm install -g @vue/cli
```

2. 建立專案

```bash
$ vue create my-project
```

3. 建立起始模板

```bash
$ vue add paradise-soft-starter-template
```

## 專案架構

```
├── /node_modules/              # 第三方套件
├── /public/                    # 靜態檔案，會被複製到 dist 文件夾
├── /src/                       # 應用程式 source code
│   ├── /api/                   # 有關 Api 的請求都放在這裡
│   ├── /assets/                # 資源
│   ├── /components/            # Vue components
│   ├── /filters/               # Global filters
│   ├── /layouts/               # Layouts
│   ├── /mixins/                # Global mixins
│   ├── /pages/                 # 關於頁面的文件夾
│   ├── /router/                # 頁面的路由
│   ├── /store/                 # Global 資料管理
│   ├── /styles/                # 樣式文件夾
│   ├── /utils/                 # 一些好用的工具
│   ├── /vendor/                # 把第三方套件整理成我們比較好用的工具
│   ├── /App.vue                # 入口頁面
│   └── /main.js                # startup script
├── /tests/                     # 放測試 code 的文件夾
├── .browserslistrc             # 瀏覽器支援設定
├── .env                        # 環境檔
├── .eslintrc.js                # eslint 設定檔
├── .gitlab-ci.yml              # 叫 gitlab 做事的檔案
├── babel.config.js             # babel 設定檔
├── db.json                     # Json server DB
├── jest.config.js              # jest 設定檔
├── Dockerfile                  # 叫 Docker 做事的檔案
├── package.json                # 第三方套件清單
├── vue.config.js               # Vue CLI 3 的設定檔
└── yarn.lock                   # 鎖定第三方套件依賴包版本
```

## 專案架構說明

* [src/api](./generator/default/template/src/api/README.md)

## 快速開始

1. 建立 .env 設定檔， 詳細請參考 [Vue CLI 环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)

```
VUE_APP_API_URL=http://localhost:3002
```

2. 安裝依賴套件

```bash
$ npm install
```

3. 啟動專案（開發模式）

```bash
$ npm run serve
```

4. 建立專案

```bash
$ npm run build
```

5. 啟動服務

```bash
$ npm run start
```



