# Components

管理組件的文件夾，在 components 的 Vue 組件都會自動全域註冊，不需要 import 就可以直接以檔案名稱當做組件名稱使用。

## 資料夾結構範例

```
├── /components/
│   ├── /common/                # 未分類組件
│       └── /AvatarImage.vue
│   ├── /ui/                    # UI 組件
│       ├── /BaseButton.vue
│       └── /BaseInput.vue
│   ├── /layout/                # 關於 layout 的組件
│       ├── /DefaultLayoutHeader.vue
│       └── /DefaultLayoutFooter.vue
│   └── /pages/                 # 關於 pages 的組件
│       └── /article/               
│           ├── /ArticleList.vue
│           └── /ArticleListItem.vue
├── ...
```
