const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(3);
// const title = book.title;
// const author=book.author;

//Destructuring Object
const { title, author, genres, publicationDate } = book;
console.log(title, author, genres);

// const primary = book.genres[0];
// const secondary=book.genres[1]

//Destructuring Array
const [primary, secondary] = genres;
console.log(primary, secondary);

//Rest/spread operator
const [primaryGenre, secondaryGenres, ...otherGenres] = genres;
//add item in  array using spread operator
const newGenres = [...genres, "epics"];
console.log(primaryGenre, secondaryGenres, otherGenres);
console.log(newGenres);

const updatedBook = { ...book, moviePublishedDate: "2024-11-04", pages: 1212 };
console.log(updatedBook);

//arrow function
const getYear = (str) => str.split("-")[0];

//template literals
const summary = `${title} , has ${
  book.pages
} long pages, Written by ${author} published in ${getYear(
  publicationDate
)} book ${book.hasMovieAdaptation ? "" : "not"} has been adapted as a movie`;
console.log(summary);

//&& operator if the first condition is true then it will return the second value and if the first is false it will return the first ne
console.log(true && "nope");
console.log(false && "nope");

//false value: 0," ",null,undefined

// || operator if the first condition is true then it will return the first value and if the first is false it will return the second ne
console.log(false || "nope");
console.log(book.translations.spanish || "no translate");
// console.log(book.reviews.librarything.reviewsCount || "no data");
// ?? it will return the second value only if first value is null or underfined not 0 or empty string
// console.log(book.reviews.librarything.reviewsCount ?? "no data");


*/
//you need to be a true master of the three functional array methods in JavaScript which are map, filter, and reduce. And I call them functional array methodsbecause these methods do not mutate the original array but do instead return a new array based on the original one.

/*
So what does the map method actually do?
Well, basically, the map method will loop over an array
and return a new array
with the same length with some operation applied
to each of the elements of the original array.
 */
// const x = [1, 2, 3, 4, 5].map((num) => num * 2);
// console.log(x);
// const books = getBooks();
// const title = books.map((book) => book.title);
// console.log(title);
// ? optional chaining
// function getTotalReview(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

//   return goodreads + librarything;
// }

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReview(book),
// }));
// console.log(essentialData);

// const longPage = books.filter((book) => book.pages > 500);
// console.log(longPage);

// const adventure = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventure);
/* 
reduce method,has 2 parameters, 1 is a callback function and other is a starting value we start with 0.
in callback function we will have two parameters, acc is a parameters that will take accumulate value while the book is a current value
 ex: 0 + 1216=1216, now acc is 1212
 1212+295=  1507, now acc is 1507 and so on

*/
/*
const bookToRead = books.reduce((acc, book) => acc + book.pages, 0);
console.log(bookToRead);

const num = [3, 7, 1, 6, 5, 9];
const sorted = num.sort((a, b) => a - b);
console.log(sorted);

const sortByPage = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortByPage);

const newObject = {
  title: "Harry Poter",
  author: "cynthia",
  page: 1213,
};

// to add a new object in array we use spread operator
const addNewObject = [...books, newObject];
console.log(addNewObject);

//to delete object in array or to make it smaller we use filter method(we delete the object that has id of 3)
const deleteObject = books.filter((book) => book.id !== 3);
console.log(deleteObject);

//to update an array we use map
const updateArr = books.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
console.log(updateArr);
*/
async function getTodos() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await resp.json();
  console.log(data);
}
getTodos();

console.log("jonas");
