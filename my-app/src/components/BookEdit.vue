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

    <button @click="gotoBook()">Cancel</button>
    <button @click="saveEdition()">Save</button>
  </div>
</template>

<script>
import { getPost, edit } from "../postsNormalize.js";

export default {
  data: () => ({
    post: {}
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
    gotoBook() {
      let id = this.$route.params.id;
      this.$router.push("/book/" + id);
    },
    saveEdition() {
      let id = this.$route.params.id;

      edit(this.post, id);
      this.$router.push("/book/" + id);
    }
  }
};
</script>