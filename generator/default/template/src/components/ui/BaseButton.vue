<template>
  <button class="base-button"
          v-bind="$attrs"
          v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss">
.base-button {
  width: 220px;
  height: 40px;
  margin-top: 4px;
  margin-bottom: 8px;
  padding: 0 15px;
  border: 1px solid #409eff;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  background: #409eff;
  color: #fff;

  &:focus,
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
</style>
