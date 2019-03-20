# Layouts

## 建立 layout

建立 src/layouts/MyLayout.vue

```vue
<template>
  <div class="my-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MyLayout',
};
</script>
```

## 在頁面中使用 layout

```vue
<template>
  <div class="home">
    <p>I'm Home Page</p>
    <BaseButton @click="userLogout">Logout</BaseButton>
  </div>
</template>

<script>
export default {
  name: 'Home',

  route: {
    meta: {
      layout: 'MyLayout',
      isPublic: false,
    },
    // vue route setting ...
  },

  methods: {
    userLogout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>
```
