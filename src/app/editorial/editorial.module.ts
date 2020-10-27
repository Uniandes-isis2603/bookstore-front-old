import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialListComponent } from "./editorial-list/editorial-list.component";
import { EditorialDetailComponent } from "./editorial-detail/editorial-detail.component";

import { RouterModule } from '@angular/router';
import { BookModule } from "../book/book.module"

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BookModule
  ],
  declarations: [
    EditorialListComponent,
    EditorialDetailComponent
  ]
})
export class EditorialModule { }
