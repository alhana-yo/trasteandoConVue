import {
  loadPosts,
  loadPost,
  savePost,
  editPost,
  deletePost,
  saveComment,
  updateComment,
  deleteComment
} from "./postsService.js";

export async function getList() {
  const postList = await loadPosts();
  return postList;
}

export async function getPost(id) {
  const post = await loadPost(id);
  return post;
}

export async function createPost(info) {
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

export async function edit(info, id) {
  const post = await editPost(
    {
      name: info.name,
      lastName: info.lastName,
      nickname: info.nickname,
      postTitle: info.postTitle,
      postText: info.postText,
      postComments: info.postComments
    },
    id
  );

  console.log("edited Post", post);
}

export async function deleteItem(id) {
  const post = await deletePost(id);

  console.log("deleted Post", post);
}

export function createComment(info, idPost) {
  return saveComment(
    {
      nickname: info.nickname,
      text: info.text
    },
    idPost
  );
}

export function editComment(info, idPost, idComment) {
  return updateComment(
    {
      nickname: info.nickname,
      text: info.text
    },
    idPost,
    idComment
  );
}

export function deleteReview(idPost, idComment) {
  return deleteComment(idPost, idComment);
}
