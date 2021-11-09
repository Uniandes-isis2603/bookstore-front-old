import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookReviewsComponent } from "./book-reviews/book-reviews.component";
import { BookCreateComponent } from "./book-create/book-create.component";
import { BookAddReviewComponent } from "./book-add-review/book-add-review.component";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [BookListComponent, BookDetailComponent, BookReviewsComponent, BookCreateComponent, BookAddReviewComponent],
  exports: [BookListComponent, BookDetailComponent, BookReviewsComponent, BookCreateComponent, BookAddReviewComponent]
})
export class BookModule { }
