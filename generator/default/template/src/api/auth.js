import request from '@/utils/request';

export function userLogin({ username, password }) {
  return request.post(
    '/login',
    JSON.stringify({
      grant_type: 'password',
      username,
      password,
    })
  );
}

export function userLogout() {}
