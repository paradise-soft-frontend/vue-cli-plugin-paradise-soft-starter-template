import { fetchPosts, fetchPost, createPost } from '@/api/posts';
import { watch } from '@/vendor/vuex-api-request';

const INITIAL_STATE = {
  posts: [],
};

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  // eslint-disable-next-line
  CLEAR(state) {
    state = Object.assign(state, JSON.parse(JSON.stringify(INITIAL_STATE)));
  },
};

const actions = {
  async getPosts(context) {
    const res = await watch(context, 'getPosts')(fetchPosts());
    context.commit('SET_POSTS', res.data);
  },
  async getPost(context, id) {
    const res = await fetchPost(id);
    return res;
  },
  async createPost(context, data) {
    await createPost(data);
  },
  clear({ commit }) {
    commit('CLEAR');
  },
};

const getters = {
  posts: (state) => state.posts,
};

export default {
  namespaced: true,
  state: JSON.parse(JSON.stringify(INITIAL_STATE)),
  mutations,
  actions,
  getters,
};
