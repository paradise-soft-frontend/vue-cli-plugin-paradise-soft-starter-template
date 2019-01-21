<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
const layouts = {};
const requireModules = require.context('./layouts', false, /\.vue/);
requireModules.keys().forEach((filename) => {
  const layoutKeyName = filename.replace(/(\.\/|\.vue)/g, '');
  layouts[layoutKeyName] = requireModules(filename).default;
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
