<template>
  <div class="home">
    <p>I'm Home Page</p>
    <BaseButton @click="userLogout">Logout</BaseButton>
  </div>
</template>

<script>
export default {
  name: 'Home',

  meta: {
    layout: 'Default',
    isPublic: false,
  },

  methods: {
    userLogout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>
