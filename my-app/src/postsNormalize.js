import { loadPosts } from "./postsService.js";

let postList = [];
export async function getList() {
  postList = await loadPosts();
  console.log("lista de posts-postList", postList);

  return postList;
  /*
  let titles = [];
  console.log("titles", titles);
  for (let item of postList) {
    titles.push(await getPost(item));
  }
  console.log("titles", titles);
  return titles;
  */
}

export async function getPost(post) {
  return { postTitle: post.postTitle, id: post.id };
}

//export default postList;
