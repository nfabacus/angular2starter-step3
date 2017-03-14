"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var books_service_1 = require("../books.service");
var BooksListComponent = (function () {
    function BooksListComponent(_bookService) {
        this._bookService = _bookService;
        this.favoriteMessage = "";
        this.imageWidth = 100;
        this.showImage = true;
        this.booksInStock = 2;
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
    BooksListComponent.prototype.onFavoriteClicked = function (message) {
        this.favoriteMessage = message;
    };
    BooksListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bs-books-list',
        templateUrl: 'books-list.component.html'
    }),
    __metadata("design:paramtypes", [books_service_1.BookService])
], BooksListComponent);
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map