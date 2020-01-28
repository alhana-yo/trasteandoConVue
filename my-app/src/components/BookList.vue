<template>
  <div>
    <h2>POSTS</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/book/' + post.id">{{ post.id }} - {{ post.postTitle }}</router-link>
      </li>
    </ul>

    <a @click="newPost()">New Post</a>
  </div>
</template>

<script>
import { getList } from "../postsNormalize.js";
export default {
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    getList().then(response => (this.posts = response));
  },
  // computed: function() {
  //   getList().then(response => (this.posts = response));
  // },

  methods: {
    newPost() {
      this.$router.push("/book/new");
    }
  }
};
</script>
