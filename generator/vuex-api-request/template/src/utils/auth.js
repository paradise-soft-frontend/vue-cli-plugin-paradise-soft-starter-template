import Vue from 'vue'
import router from '@/router'
import store from '@/store'

export default {
  login(url, {creds, redirect}) {
    return Vue.http
      .post(
        url,
        JSON.stringify({
          grant_type: 'password',
          ...creds,
        })
      )
      .then((response) => {
        const auth = store.state.auth
        auth.isLoggedIn = true
        auth.accessToken = response.data.access_token
        store.dispatch('auth/update', auth)
        if (redirect) router.push({name: redirect})
        return response
      })
  },

  logout() {
    store.dispatch('clear')
    router.push({name: 'login'})
  },
}
