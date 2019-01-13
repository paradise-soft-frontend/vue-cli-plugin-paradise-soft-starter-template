<template>
  <div class="error-page">
    <img src="@/assets/error.gif">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
}
</script>

<style>
.error-page {
  text-align: center;
  margin-top: 60px;
}
</style>