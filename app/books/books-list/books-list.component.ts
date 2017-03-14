import { Component } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../books.service'

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent {

  books: IBook[];
  favoriteMessage: string = "";
  imageWidth: number = 100;
  showImage: boolean = true;
  booksInStock: number = 2;

  constructor(private _bookService: BookService) {
    this.books = _bookService.getBooks();
  }


//   books: any[] = [
//     {
//       bookAuthor: "Tom Jones",
//       bookTitle: "War and Peace 2",
//       bookPrice: 29.95,
//       bookDescription: "Book of historical fiction",
//       publishedOn: new Date('02/11/1921'),
//       inStock: "Yes",
//       booksInStock: 10,
//       bookReviews: 15,
//       bookImageUrl: "app/assets/images/656.jpg"
//     },
//     {
//       bookAuthor: "Mike Davis",
//       bookTitle: "Once Upon A TIme",
//       bookPrice: 50.99,
//       bookDescription: "Book of Adventures",
//       publishedOn: new Date('02/11/1996'),
//       inStock: "Yes",
//       booksInStock: 100,
//       bookReviews: 150,
//       bookImageUrl: "app/assets/images/656.jpg"
//     }
// ];

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


}
