<template>
  <div>
    <h2>{{post.postTitle}}</h2>
    <p>{{post.name}} {{post.lastName}}</p>
    <p>{{post.nickname}}</p>
    <div>
      <label>Id:</label>
      {{post.id}}
    </div>
    <div>
      <label>Description:</label>
      {{post.postText}}
    </div>

    <ul>
      <p>Comments</p>
      <li v-for="comment in postComments" :key="comment.id">
        <p>{{comment.nickname}}</p>
        <p>{{comment.date}}</p>
        <p>{{comment.text}}</p>
      </li>
    </ul>

    <button @click="gotoPosts()">Back</button>
    <button @click="gotoEdit()">Edit</button>
    <button @click="deletePost()">Delete</button>
  </div>
</template>

<script>
import { getPost, deleteItem } from "../postsNormalize.js";

export default {
  // computed: {
  //   book() {
  //     let id = this.$route.params.id;
  //     return books.getBook(id);
  //   }
  // },

  data: function() {
    return {
      post: {},
      postComments: []
    };
  },
  created: function() {
    let id = this.$route.params.id;
    getPost(id).then(response => {
      this.post = response;
      this.postComments = response.postComments;
    });
  },
  methods: {
    gotoPosts() {
      this.$router.push("/books");
    },
    gotoEdit() {
      let id = this.$route.params.id;
      this.$router.push("/book/edit/" + id);
    },
    deletePost() {
      let id = this.$route.params.id;
      console.log("id del post a borrar", id);
      deleteItem(id);
      this.$router.push("/books");
    }
  }
};
</script>