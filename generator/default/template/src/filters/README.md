# Filters

呈現上的簡易調整可以利用 filter 功能

```js
export function zh_CN(msg) {
  const translate = {
    hi: '哈囉',
    world: '世界',
  }
  
  return translate[msg]
}
```