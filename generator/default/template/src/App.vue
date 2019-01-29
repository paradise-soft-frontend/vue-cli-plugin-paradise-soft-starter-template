<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
const layouts = {};
const layoutModules = require.context('@/layouts', false, /\.vue/);
layoutModules.keys().forEach((filename) => {
  const layoutKeyName = filename.replace(/(\.\/|\.vue)/g, '');
  layouts[layoutKeyName] = layoutModules(filename).default;
});

export default {
  name: 'App',
  computed: {
    layout() {
      const layout = this.$route.meta && this.$route.meta.layout;
      return layout || 'Default';
    },
  },
  components: {
    ...layouts,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
