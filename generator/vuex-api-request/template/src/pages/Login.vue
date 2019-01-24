<template>
  <div class="login">
    <form class="login-form"
          @submit.prevent="userLogin">
      <img class="login-form-logo"
           src="@/assets/logo.svg">
      <BaseInput v-model="form.username"
                 type="text" />
      <BaseInput v-model="form.password"
                 type="password" />
      {{vuexApiRequest('login').error}}
      <BaseButton type="submit">登入</BaseButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    userLogin() {
      this.$store.dispatch('auth/login', this.form);
    },
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-logo {
      width: 150px;
      margin-bottom: 20px;
    }
  }
}
</style>
