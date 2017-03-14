import  { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IBook } from './book';

@Injectable()
export class BookService {

getBooks(): IBook[] {
  return [{
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace 2",
    bookPrice: 29.95,
    bookDescription: "Book of historical fiction",
    publishedOn: new Date('02/11/1921'),
    inStock: "Yes",
    booksInStock: 10,
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg"
  },
  {
    bookAuthor: "Mike Davis",
    bookTitle: "Once Upon A TIme",
    bookPrice: 50.99,
    bookDescription: "Book of Adventures",
    publishedOn: new Date('02/11/1996'),
    inStock: "Yes",
    booksInStock: 100,
    bookReviews: 150,
    bookImageUrl: "app/assets/images/656.jpg"
  }]
}
}
