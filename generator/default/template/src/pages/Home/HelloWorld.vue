<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org"
         target="_blank"
         rel="noopener">
        vue-cli documentation </a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <h3>Posts</h3>
    <ul>
      <li v-for="(post, index) in posts"
          :key="index">
        <a v-text="post.title"></a>
      </li>
    </ul>
    <button @click="createData">create data</button>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    ...mapActions('posts', {
      getPosts: 'getPosts',
      getPost: 'getPost',
      createPost: 'createPost',
      clearPosts: 'clear',
    }),
    async createData() {
      await this.createPost({title: 'hi', author: 'yiwei'})
      this.getPosts()
    },
  },
  computed: mapGetters('posts', ['posts']),
  created() {
    this.getPosts()
    // this.getPost(1)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
