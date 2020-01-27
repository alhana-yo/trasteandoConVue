import { loadPosts } from "./postsService.js";

export async function getList() {
  const postList = await loadPosts();
  console.log("lista de posts-postList", postList);

  return postList;
}

export function getPost(post) {
  return { postTitle: post.postTitle, id: post.id };
}

//export default postList;
