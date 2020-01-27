import * as postsNormalize from "../postsNormalize.js";

let postsList = [];

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
  constructor(list) {
    this.books = [];
    list.then(function(list) {
      console.log("en el constructor", list);
      //   list.forEach(element => {
      //     console.log(new Book(element.yearOfBirth, element.name, element.actor));
      //   });

      // this.books = list.forEach(element => {
      //   new Book(element.yearOfBirth, element.name, element.actor);
      // });
      list.forEach(element => {
        postsList.push(
          new Book(element.yearOfBirth, element.name, element.actor)
        );
      });
      console.log("postlisssssssssst en then", postsList);
    });
    // this.books = [
    //     new Book(
    //       11,
    //       "SUEÑOS DE ACERO Y NEON",
    //       "Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."
    //     )]
  }

  getBooks() {
    //return this.books;

    this.books = postsList;
    console.log("en getBooks", this.books);
    return this.books;
    // console.log("en getBooks", postsList);
    // return postsList;
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
