import * as axios from "axios";

export async function loadPosts() {
  //localhost:3000/blogEntries/
  //http://hp-api.herokuapp.com/api/characters
  let result = await axios
    .get("http://hp-api.herokuapp.com/api/characters")
    .then(response => (result = response));
  console.log("rsult", result.data);
  return result.data;
}
