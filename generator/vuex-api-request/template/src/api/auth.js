import Vue from 'vue';

export function userLogin({ username, password }) {
  return Vue.http.post(
    '/login',
    JSON.stringify({
      grant_type: 'password',
      username,
      password,
    })
  );
}

export function userLogout() {}