import * as axios from "axios";

//localhost:3000/blogEntries/
//http://hp-api.herokuapp.com/api/characters

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
  console.log("rsult", result.data);
  return result.data;
}

export async function savePost(info) {
  console.log("peticion base de datos");
  await axios
    .post("http://localhost:3000/blogEntries/", info)
    .then(response => console.log(response));
}

export async function editPost(info, id) {
  console.log("peticion editar base de datos", id);
  await axios
    .put("http://localhost:3000/blogEntries/" + id, info)
    .then(response => console.log(response));
}

export async function deletePost(id) {
  console.log("peticion borrar base de datos", id);
  await axios
    .delete("http://localhost:3000/blogEntries/" + id)
    .then(response => console.log(response));
}

export async function saveComment(info, idPost) {
  console.log("peticion base de datos");
  await axios
    .post("http://localhost:3000/blogEntries/" + idPost + "/comments", info)
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
