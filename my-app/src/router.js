import Vue from "vue";
import Router from "vue-router";

import BookList from "./components/BookList.vue";
import BookDetail from "./components/BookDetail.vue";
import BookNew from "./components/BookNew.vue";
import BookEdit from "./components/BookEdit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/books" },
    { path: "/books", name: "bookslist", component: BookList },
    { path: "/book/edit/:id", name: "BookEdit", component: BookEdit },
    { path: "/book/new", name: "bookNew", component: BookNew },
    { path: "/book/:id", name: "bookDetail", component: BookDetail }
  ]
});
