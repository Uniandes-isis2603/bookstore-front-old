import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookReviewsComponent} from "./book-reviews/book-reviews.component";

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule
  ],
  declarations: [BookListComponent, BookDetailComponent, BookReviewsComponent],
  exports: [BookListComponent, BookDetailComponent]
})
export class BookModule { }
