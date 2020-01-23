<template>
  <div>
    <h2>{{book.title}}</h2>
    <p>
      <span>Id:</span>
      {{book.id}}
    </p>
    <div>
      <label>Title:</label>
      <input v-model="book.title" placeholder="Title" />
    </div>
    <div>
      <label>Description:</label>
      <textarea v-model="book.description"></textarea>
    </div>

    <button @click="gotoBooks()">Cancel</button>
    <button @click="saveEdit()">Save</button>
  </div>
</template>

<script>
import books from "./books.js";

export default {
  data: () => ({
    book: undefined
  }),
  beforeMount: function() {
    console.log(this.$route.params.id);
    if (!this.$route.params.id) {
      this.book = { title: "", description: "" };
    } else {
      let id = this.$route.params.id;
      this.book = books.getBook(id);
    }
  },
  methods: {
    gotoBooks() {
      this.$router.push("/books");
    },
    saveEdit() {
      // const id = parseInt(this.$route.params.id);
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