import { loadPosts, loadPost, savePost } from "./postsService.js";

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

export async function createPost(info) {
  console.log("he entrado en createPost normalizer");
  const post = await savePost({
    name: info.name,
    lastName: info.lastName,
    nickname: info.nickname,
    postTitle: info.postTitle,
    postText: info.postText,
    postComments: []
  });

  console.log("createPost", post);
}
