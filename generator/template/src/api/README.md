# 🔗 API 串接

放置所有有關 http 請求的文件夾

## API URL 設定

到 .env 檔修改 UE_APP_API_URL

```
VUE_APP_API_URL='http://api.vue-starter.com'
```
<br/>

## 使用


```js
import request from '@/utils/request'

export function fetchPosts() {
  return request.get('/posts')
}
```
<br/>

##  當後端 API 還沒準備好，可以使用 JSON server

**Step1 - 定義格式**

創建 db.json

```json
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ]
}
```

**Step2 - 開啟 JSON server**

```
$ yarn json-server
```



**Step3 - 向 Json server 拿假資料，將 baseURL 複寫成 JSON server 的 URL，可以使用 CRUD**

```js
import request from '@/utils/request'

export function fetchPosts() {
  return request.get('/posts', {baseURL: 'http://localhost:3002'})
}

export function fetchPost(id) {
  return request.get(`/posts/${id}`, {baseURL: 'http://localhost:3002'})
}

export function createPost(id, data) {
  return request.post(`/posts/${id}`, data, {baseURL: 'http://localhost:3002'})
}

export function updatePost(id, data) {
  return request.put(`/posts/${id}`, data, {baseURL: 'http://localhost:3002'})
}

export function deletePost(id) {
  return request.put(`/posts/${id}`, {baseURL: 'http://localhost:3002'})
}
```
