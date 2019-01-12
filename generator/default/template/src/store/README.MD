# 🏬 Veux

專為 Vue.js 應用程序開發的狀態管理模式。前端跟 API 之間的接口。

![](https://vuex.vuejs.org/vuex.png)


## 架構

小型 Vue.js 應用程序我們可以使用此架構

```
├── /store/               
│   ├── /index.js/
│   ├── /mutations.js
│   ├── /actions.js
│   ├── /getters.js
│   └── /modules/
│       ├── /products.js
│       ├── /chat.js
│       ├── ...
├── ...
```
我們用 module 來操作後端給我們的每一種資料模型，一般的簡單操作可能只對一種資料模型進行 CRUD 的操作。但當應用變得可加龐大，可能對一種資料模型進行更細微的操作，此時 module 的程式碼可能會操過 1000 行，我們可以將 Veux 架構修改成 

```
├── /store/               
│   ├── /index.js/
│   ├── /mutations.js
│   ├── /actions.js
│   ├── /getters.js
│   └── /modules/
│       ├── /products/
│           ├── /index.js
│           ├── /mutations.js
│           ├── /actions.js
│           ├── /getters.js
│       ├── ...
├── ...
```
<br/>

## 使用

我們會使用 modules 來處理每一種資料模型，程式碼不會四處傳播並保持一致，因此根據維護性及可讀性。但有些資料會影響其他 modules，我們會把對這些資料的操做放在 root 層的 index.js、mutations.js、actions.js 和getters.js。

直接在 modules 中建立 [moduleName].js 就可以使用

```js
const INITIAL_STATE = {

}

const mutations = {
  // eslint-disable-next-line
  CLEAR(state) {
    state = Object.assign(state, JSON.parse(JSON.stringify(INITIAL_STATE)))
  },
}

const actions = {
  clear({commit}) {
    commit('CLEAR')
  },
}

const getters = {

}

export default {
  namespaced: true,
  state: JSON.parse(JSON.stringify(INITIAL_STATE)),
  mutations,
  actions,
  getters,
}

```





