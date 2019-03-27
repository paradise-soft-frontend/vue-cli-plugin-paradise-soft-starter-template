<template>
  <div class="home">
    <p>I'm Home Page</p>
    <BaseButton @click="userLogout">Logout</BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Home',

  components: {
    BaseButton,
  },

  route: {
    meta: {
      layout: 'Default',
      isPublic: false,
    },
  },

  methods: {
    userLogout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>
