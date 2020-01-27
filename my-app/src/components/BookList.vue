<template>
  <div>
    <h2>BOOKS</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="'/book/' + book.id"
          >{{ book.id }} - {{ book.title }}</router-link
        >
      </li>
    </ul>

    <a @click="newBook()">New Book</a>
  </div>
</template>

<script>
import books from "./books.js";
// import * as postsNormalize from "../postsNormalize.js";

export default {
  computed: {
    books() {
      console.log("en el componente", books);
      return books.getBooks();
      // let posts = postsNormalize.getList();
      // console.log("en boobklist", posts);
      // return posts;
    }
  },
  methods: {
    newBook() {
      this.$router.push("/book/new");
    }
  }
};
</script>
