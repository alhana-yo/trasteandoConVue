import Vue from "vue";
import Router from "vue-router";

import PostList from "./components/PostList.vue";
import PostDetail from "./components/PostDetail.vue";
import PostNew from "./components/PostNew.vue";
import PostEdit from "./components/PostEdit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/posts" },
    { path: "/posts", name: "postslist", component: PostList },
    { path: "/post/edit/:id", name: "postEdit", component: PostEdit },
    { path: "/post/new", name: "postNew", component: PostNew },
    { path: "/post/:id", name: "postDetail", component: PostDetail }
  ]
});
