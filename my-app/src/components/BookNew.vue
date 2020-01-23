<template>
  <div>
    <h2>{{book.title}}</h2>
    <!-- <p>
      <span>Id:</span>
      {{book.id}}
    </p>-->
    <div>
      <label>Title:</label>
      <input v-model="book.title" placeholder="Title" />
    </div>
    <div>
      <label>Description:</label>
      <textarea v-model="book.description"></textarea>
    </div>

    <button @click="gotoBooks()">Cancel</button>
    <button @click="save()">Save</button>
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
    save() {
      books.createNewBook(this.book);
      this.$router.push("/books");
    }
  }
};
</script>