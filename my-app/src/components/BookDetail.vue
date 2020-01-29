

<template>
  <div>
    <h2>{{post.postTitle}}</h2>
    <p>{{post.name}} {{post.lastName}}</p>
    <p>{{post.nickname}}</p>
    <div>
      <label>Id:</label>
      {{post.id}}
    </div>
    <div>
      <label>Description:</label>
      {{post.postText}}
    </div>

    <ul class="list">
      <p>Comments</p>
      <li
        v-on:click="getClickedCommentId"
        class="list--item"
        v-for="comment in postComments"
        :key="comment.commentId"
        :pkey="comment.commentId"
      >
        <p>{{comment.nickname}}</p>
        <p>Id: {{comment.commentId}}</p>
        <p>{{comment.date}}</p>
        <p>{{comment.text}}</p>
        <button @click="editComment()">Edit comment</button>
        <button @click="deleteComment()">Delete comment</button>
      </li>
    </ul>
    <div v-if="this.show">
      <div>
        <label>Nickname:</label>
        <input v-model="newComment.nickname" placeholder="Nickname" />
      </div>
      <div>
        <label>Text:</label>
        <textarea v-model="newComment.text"></textarea>
      </div>
      <button @click="addComment()">Add comment</button>
      <button @click="notShowContent()">Cancel</button>
    </div>
    <button @click="gotoPosts()">Back</button>
    <button @click="gotoEdit()">Edit</button>
    <button @click="deletePost()">Delete</button>
    <button @click="showContent()">New comment</button>
  </div>
</template>

<script>
import { getPost, deleteItem, createComment } from "../postsNormalize.js";

export default {
  data: function() {
    return {
      post: {},
      postComments: [],
      newComment: {},
      show: false,
      clickedCommentId: undefined
    };
  },
  created: function() {
    this.getPost();
  },
  // updated: function() {
  //   this.getPost();
  // },
  methods: {
    gotoPosts() {
      this.$router.push("/books");
    },
    gotoEdit() {
      let id = this.$route.params.id;
      this.$router.push("/book/edit/" + id);
    },
    deletePost() {
      let id = this.$route.params.id;
      deleteItem(id);
      this.$router.push("/books");
    },
    async addComment() {
      const postId = this.$route.params.id;
      const result = await createComment(this.newComment, postId);
      if (result) {
        this.sentBadwordsMessage(result);
      }
      this.newComment.nickname = "";
      this.newComment.text = "";
      this.show = false;
    },
    showContent() {
      this.show = true;
    },
    notShowContent() {
      this.show = false;
    },
    getPost() {
      let id = this.$route.params.id;
      getPost(id).then(response => {
        this.post = response;
        this.postComments = response.postComments;
      });
    },
    sentBadwordsMessage(badwords) {
      let message =
        "you can not post this message because it contains the following forbidden words: ";

      badwords.forEach(element => {
        message = message.concat(
          element.badword,
          " with level ",
          element.level,
          " /"
        );
      });
      alert(message);
    },
    editComment() {
      //let postId = this.$route.params.id;
      // if (confirm("Are you sure deleting this post?")) {
      //   console.log("saved22", this.clickedCommentId);
      // }
      console.log("saved22", this.clickedCommentId);
    },
    getClickedCommentId(e) {
      console.log("el target", e.target.getAttribute("pkey"));
      this.clickedCommentId = e.currentTarget.getAttribute("pkey");
      console.log("el current", this.clickedCommentId);
    }
  }
};
</script>