import * as postsNormalize from "../postsNormalize.js";

async function loadPosts() {
  let postsList = await postsNormalize.getList();
  console.log("en books", postsList);
  return postsList;
}

class Book {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

class Books {
  constructor(promise) {
    this.books = [];
    promise.then(list => {
      console.log("en el constructor", list);

      this.books = [...list];
      // list.forEach(element => {
      //   postsList.push(
      //     new Book(element.yearOfBirth, element.name, element.actor)
      //   );
      // });
      console.log("postlisssssssssst en then", this.books);
    });
  }

  getBooks() {
    console.log("en getBooks", this.books);
    return this.books;
  }

  getBook(id) {
    return this.books.find(book => book.id === +id);
  }

  createId() {
    let id = Math.random();
    return id;
    // let sameId = true;
    // console.log("dentro del metodo de id");
    // while (sameId) {
    //   console.log("dentro del while", sameId);

    //   this.books.forEach(num => {
    //     if (id == num.id) {
    //       id = Math.random();
    //       sameId = false;
    //     } else {
    //       return id;
    //     }
    //   });
    // }
  }
  createNewBook(book) {
    const id = this.createId();
    // let id = -1;
    // this.getBooks().forEach(elem => {
    //   book.id == elem.id ? (id = book.id) : (id = this.createId());
    // });
    this.books.push(new Book((book.id = id), book.title, book.description));
  }
  // editBook(position, book) {
  //   const elements = this.books.splice(position, 1, book);
  //   console.log("elementos eliminados en el splice", elements);
  // }
}

export default new Books(loadPosts());
