import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

import { filter } from 'rxjs/operators';
import { ConstantPool } from '@angular/compiler';
import { BookDetail } from '../book-detail';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() books: BookDetail[];
  @Input() all: boolean = true;

  orderValue: String = 'Names A-Z';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  getBooks(): void {
    this.books = this.bookService.getBooks();
    //this.books = BOOKS;
  }

  getBooksLength(): Number {
    return this.books.length;
  }

  setOrderValue(value: String): void {
    this.orderValue = value;
  }

  ngOnInit() {
    if (this.all) {
      this.getBooks();
    }
  }
}
