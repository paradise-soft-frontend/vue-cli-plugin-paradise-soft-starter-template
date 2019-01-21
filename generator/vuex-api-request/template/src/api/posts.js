import Vue from 'vue';

// fetch data from json server
export function fetchPosts() {
  return Vue.http.get('/posts', { baseURL: 'http://localhost:3002' });
}

// fetch data from api server
export function fetchPost(id) {
  return Vue.http.get(`/posts/${id}`);
}

export function createPost(data) {
  return Vue.http.post('/posts', data, { baseURL: 'http://localhost:3002' });
}
