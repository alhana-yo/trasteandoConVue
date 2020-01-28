<template>
  <div>
    <div>
      <label>Post Title:</label>
      <input v-model="post.postTitle" placeholder="Post Title" />
    </div>

    <div>
      <label>Post Author:</label>
      <input v-model="post.name" placeholder="Autho's Name" />
      <input v-model="post.lastName" placeholder="Author's Lastname" />
      <input v-model="post.nickname" placeholder="Author's nickname" />
    </div>

    <div>
      <label>Description:</label>
      <textarea v-model="post.postText"></textarea>
    </div>

    <button @click="gotoBooks()">Cancel</button>
    <button @click="saveEdit()">Save</button>
  </div>
</template>

<script>
import { getPost } from "../postsNormalize.js";

export default {
  data: () => ({
    post: undefined
  }),
  beforeMount: function() {
    if (!this.$route.params.id) {
      this.post = {
        name: "",
        lastName: "",
        nickname: "",
        postTitle: "",
        postText: ""
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
    saveEdit() {
      // const id = parseFloat(this.$route.params.id);
      // const position = books.books.findIndex(element => {
      //   console.log("element.id", element.id);
      //   console.log("id", id);
      //   console.log("element.id === id;", element.id === id);
      //   element.id === id;
      // });

      // console.log("la posicion", position);
      //books.editBook(this.book, position);
      this.$router.push("/books");
    }
  }
};
</script>