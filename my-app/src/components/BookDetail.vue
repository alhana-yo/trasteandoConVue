

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
      <li class="list--item" v-for="comment in postComments" :key="comment.commentId">
        <p>{{comment.nickname}}</p>
        <p>Id: {{comment.commentId}}</p>
        <p>{{comment.date}}</p>
        <p>{{comment.text}}</p>
        <button @click="editTheComment(comment.commentId)">Edit comment</button>
        <button @click="deleteComment(comment.commentId)">Delete comment</button>
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
      <button v-if="this.add" @click="addComment()">Add comment</button>
      <button v-if="this.edit" @click="addEditedComment()">Add edition</button>
      <button @click="notShowContent()">Cancel</button>
    </div>
    <button @click="gotoPosts()">Back</button>
    <button @click="gotoEdit()">Edit</button>
    <button @click="deletePost()">Delete</button>
    <button @click="showContent()">New comment</button>
  </div>
</template>

<script>
import {
  getPost,
  deleteItem,
  createComment,
  editComment,
  deleteReview
} from "../postsNormalize.js";

export default {
  data: function() {
    return {
      post: {},
      postComments: [],
      newComment: {},
      show: false,
      add: false,
      edit: false,
      editedCommentId: undefined
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
      if (!(this.newComment.nickname && this.newComment.text)) {
        alert("You need to complete all the fields");
      } else {
        const postId = this.$route.params.id;
        const result = await createComment(this.newComment, postId);
        this.testText(result);
      }
      // const postId = this.$route.params.id;
      // const result = await createComment(this.newComment, postId);
      // this.testText(result);
    },
    showContent() {
      this.show = true;
      this.add = true;
      this.edit = false;
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
    editTheComment(commentId) {
      this.show = true;
      this.edit = true;
      this.add = false;
      const position = this.postComments
        .map(x => x.commentId)
        .indexOf(commentId);
      this.newComment.nickname = this.postComments[position].nickname;
      this.newComment.text = this.postComments[position].text;
      this.editedCommentId = commentId;
    },
    async addEditedComment() {
      let postId = this.$route.params.id;
      const result = await editComment(
        this.newComment,
        postId,
        this.editedCommentId
      );
      this.testText(result);
    },
    testText(result) {
      if (result) {
        this.sentBadwordsMessage(result);
      }
      this.newComment.nickname = "";
      this.newComment.text = "";
      this.show = false;
    },
    deleteComment(commentId) {
      let postId = this.$route.params.id;
      if (confirm("Are you sure deleting this comment?")) {
        deleteReview(postId, commentId);
      }
    }
  }
};
</script>