"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// interface IBook {
//   bookAuthor: string;
//   bookTitle: string;
//   bookPrice: number;
//   bookDescription: string;
//   publishedOn: Date;
//   inStock: string;
//   booksInStock: number;
//   bookReviews: number;
//   bookImageUrl: string;
//   hardcover?: boolean;
// }
var BooksListComponent = (function () {
    function BooksListComponent() {
        this.imageWidth = 100;
        this.showImage = true;
        this.booksInStock = 2;
        this.books = [
            {
                bookAuthor: "Tom Jones",
                bookTitle: "War and Peace 2",
                bookPrice: 29.95,
                bookDescription: "Book of historical fiction",
                publishedOn: new Date('02/11/1921'),
                inStock: "Yes",
                booksInStock: 10,
                bookReviews: 15,
                bookImageUrl: "app/assets/images/656.jpg"
            }
        ];
    }
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
    })
], BooksListComponent);
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map