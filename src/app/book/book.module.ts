import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BookListComponent, BookDetailComponent],
  exports: [BookListComponent, BookDetailComponent]
})
export class BookModule { }
