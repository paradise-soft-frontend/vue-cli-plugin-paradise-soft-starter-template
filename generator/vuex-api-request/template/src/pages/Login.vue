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
      {{$api('login').error}}
      <BaseButton :disabled="$api('login').pending"
                  type="submit">登入</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput';
import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Login',

  components: {
    BaseInput,
    BaseButton,
  },

  route: {
    meta: {
      layout: 'Full',
      isPublic: true,
    },
  },

  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },

  watch: {
    form: {
      handler() {
        this.$api('login').clear();
      },
      deep: true,
    },
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
