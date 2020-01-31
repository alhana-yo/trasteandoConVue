import * as axios from "axios";

export async function loadPosts() {
  let result = await axios
    .get("http://localhost:3000/blogEntries/", {
      responseType: "json"
    })
    .then(response => (result = response));
  return result.data;
}

export async function loadPost(id) {
  let result = await axios
    .get("http://localhost:3000/blogEntries/" + id, {
      responseType: "json"
    })
    .then(response => (result = response));
  return result.data;
}

export async function savePost(info) {
  await axios
    .post("http://localhost:3000/blogEntries/", info)
    .then(response => console.log(response));
}

export async function editPost(info, id) {
  await axios
    .put("http://localhost:3000/blogEntries/" + id, info)
    .then(response => console.log(response));
}

export async function deletePost(id) {
  await axios
    .delete("http://localhost:3000/blogEntries/" + id)
    .then(response => console.log(response));
}

export async function saveComment(info, idPost) {
  return await axios
    .post("http://localhost:3000/blogEntries/" + idPost + "/comments", info)
    .catch(error => {
      const badwords = error.response.data.words;
      return Promise.reject(badwords);
    });
}

export async function updateComment(info, idPost, idComment) {
  return await axios

    .put(
      "http://localhost:3000/blogEntries/" + idPost + "/comments/" + idComment,
      info
    )
    .catch(error => {
      const badwords = error.response.data.words;
      return Promise.reject(badwords);
    });
}

export async function deleteComment(idPost, idComment) {
  return await axios.delete(
    "http://localhost:3000/blogEntries/" + idPost + "/comments/" + idComment
  );
}
