<template>
  <div>
    <h2>BOOKS</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/book/' + post.name">{{ post.name }} - {{ post.title }}</router-link>
      </li>
    </ul>

    <a @click="newBook()">New Book</a>
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

  methods: {
    newBook() {
      this.$router.push("/book/new");
    }
  }
};
</script>
