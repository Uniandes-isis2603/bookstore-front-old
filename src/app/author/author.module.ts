import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { RouterModule } from '@angular/router';

import { BookModule } from "../book/book.module"

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BookModule
  ],
  declarations: [AuthorListComponent, AuthorDetailComponent]
})
export class AuthorModule { }
