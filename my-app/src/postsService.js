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
  await axios
    .post("http://localhost:3000/blogEntries/" + idPost + "/comments", info)
    .then(response => {
      console.log("respuesta API REST", response);
    })
    .catch(error => {
      const badwords = error.response.data.words;
      return Promise.reject(badwords);
    });
}

export async function updateComment(info, idPost, idComment) {
  await axios
    .put(
      "http://localhost:3000/blogEntries/" + idPost + "/comments/" + idComment,
      info
    )
    .then(response => {
      console.log("respuesta API REST", response);
    })
    .catch(error => {
      const badwords = error.response.data.words;
      return Promise.reject(badwords);
    });
}

export async function deleteComment(idPost, idComment) {
  await axios
    .delete(
      "http://localhost:3000/blogEntries/" + idPost + "/comments/" + idComment
    )
    .then(response => console.log(response));
}

/*
export async function loadPosts() {
  fetch("http://localhost:3000/blogEntries/")
    .then(response => {
      console.log("lalala", response.json());
      return response.json();
    })
    .then(function(data) {
      console.log("lallala");
      let postList = data.result;
      console.log("rsult", postList);
      return postList;
    });
}
*/

// .get("http://localhost:3000/blogEntries/", {
//   headers: {
//     "Access-Control-Allow-Origin": "*"
//   }
// })

// axios.get('https://jsonplaceholder.typicode.com/todos/1', {
//     responseType: 'json'
//   })
//     .then(function(res) {
//       if(res.status==200) {
//         console.log(res.data);
//         mensaje.innerHTML = res.data.title;
//       }
//       console.log(res);
//     })
//     .catch(function(err) {
//       console.log(err);
//     })
//     .then(function() {
//       loading.style.display = 'none';
//     });
