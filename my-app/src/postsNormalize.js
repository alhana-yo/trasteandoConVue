import { loadPosts, loadPost } from "./postsService.js";

export async function getList() {
  const postList = await loadPosts();
  console.log("lista de posts-postList", postList);

  return postList;
}

export async function getPost(id) {
  const post = await loadPost(id);
  console.log("post con id", post);
  return post;
}
