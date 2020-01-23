<template>
  <div>
    <h2>{{book.title}}</h2>
    <div>
      <label>Id:</label>
      {{book.id}}
    </div>
    <div>
      <label>Description:</label>
      {{book.description}}
    </div>
    <button @click="gotoBooks()">Back</button>
    <button @click="gotoEdit()">Edit</button>
    <button @click="deleteBook()">Delete</button>
  </div>
</template>

<script>
import books from "./books.js";

export default {
  computed: {
    book() {
      let id = this.$route.params.id;
      return books.getBook(id);
    }
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
      if (confirm("Are you sure deleting this post?")) {
        let id = parseFloat(this.$route.params.id);
        console.log("librooos", books.books);
        for (let i = 0; i < books.books.length; i++) {
          console.log("dentro del for");
          console.log("books.books[i].id", books.books[i].id);
          console.log("id", id);
          if (books.books[i].id === id) {
            books.books.splice(i, 1);
            console.log("librooos tras borrar", books.books);
          }
        }
      }
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