<template>
  <div>
    <h2>{{post.title}}</h2>
    <!-- <p>
      <span>Id:</span>
      {{post.id}}
    </p>-->
    <div>
      <label>Author:</label>
      <input v-model="post.name" placeholder="Name" />
      <input v-model="post.lastName" placeholder="Last Name" />
      <input v-model="post.nickname" placeholder="Nickname" />
    </div>
    <div>
      <label>Title:</label>
      <input v-model="post.postTitle" placeholder="Title" />
    </div>
    <div>
      <label>Text:</label>
      <textarea v-model="post.postText"></textarea>
    </div>

    <button @click="gotoBooks()">Cancel</button>
    <button @click="save()">Save</button>
  </div>
</template>

<script>
// import books from "./books.js";

import { getPost, createPost } from "../postsNormalize.js";

export default {
  data: () => ({
    post: undefined
  }),
  beforeMount: function() {
    if (!this.$route.params.id) {
      this.post = {
        name: undefined,
        lastName: undefined,
        nickname: undefined,
        postTitle: undefined,
        postText: undefined
      };
    } else {
      let id = this.$route.params.id;
      getPost(id).then(response => (this.post = response));
    }
  },
  methods: {
    gotoBooks() {
      this.$router.push("/books");
    },
    save() {
      createPost(this.post);
      this.$router.push("/books");
    }
  }
};
</script>