import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

import { filter } from 'rxjs/operators';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: Book[];

  allBooks:string;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }

  ngOnInit() {

    this.route.queryParams.pipe(
      filter(params => params.allBooks)
    ).subscribe(params => {
      this.allBooks = params.allBooks;
    });

    if(this.allBooks === "true"){
      this.getBooks();
    }
  }
}
