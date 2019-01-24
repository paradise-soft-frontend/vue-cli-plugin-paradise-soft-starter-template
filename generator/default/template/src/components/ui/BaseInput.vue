<template>
  <input class="base-input"
         v-bind="$attrs"
         v-on="listeners">
</template>

<script>
export default {
  name: 'BaseInput',

  inheritAttrs: false,

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>

<style lang="scss">
.base-input {
  width: 220px;
  height: 40px;
  margin-top: 4px;
  margin-bottom: 8px;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #409eff;
  }
}
</style>
