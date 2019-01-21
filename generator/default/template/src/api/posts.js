import request from '@/utils/request';

// fetch data from json server
export function fetchPosts() {
  return request.get('/posts', { baseURL: 'http://localhost:3002' });
}

// fetch data from api server
export function fetchPost(id) {
  return request.get(`/posts/${id}`);
}

export function createPost(data) {
  return request.post('/posts', data, { baseURL: 'http://localhost:3002' });
}
