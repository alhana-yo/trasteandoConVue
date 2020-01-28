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

    <button @click="gotoBooks()">Back</button>
    <button @click="gotoEdit()">Edit</button>
    <button @click="deleteBook()">Delete</button>
  </div>
</template>

<script>
import { getPost } from "../postsNormalize.js";

export default {
  // computed: {
  //   book() {
  //     let id = this.$route.params.id;
  //     return books.getBook(id);
  //   }
  // },

  data: function() {
    return {
      post: undefined
    };
  },
  created: function() {
    let id = this.$route.params.id;
    getPost(id).then(response => (this.post = response));
  },
  methods: {
    gotoBooks() {
      this.$router.push("/books");
    },
    gotoEdit() {
      let id = this.$route.params.id;
      this.$router.push("/book/edit/" + id);
    },
    deleteBook() {
      // if (confirm("Are you sure deleting this post?")) {
      //   let id = parseFloat(this.$route.params.id);
      //   for (let i = 0; i < books.books.length; i++) {
      //     if (books.books[i].id === id) {
      //       books.books.splice(i, 1);
      //     }
      //   }
      // }
      this.$router.push("/books");
    },

    removeElement: function(id) {
      for (let i = 0; i < this.valuesArray.length; i++) {
        if (this.valuesArray[i].id === id) {
          this.valuesArray.splice(i, 1);
        }
      }
    }
  }
};
</script>