import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialListComponent } from "./editorial-list/editorial-list.component";
import { EditorialDetailComponent } from "./editorial-detail/editorial-detail.component";

import { RouterModule } from '@angular/router';
import { BookModule } from "../book/book.module"
import { EditorialCreateComponent } from './editorial-create/editorial-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BookModule
  ],
  declarations: [
    EditorialListComponent,
    EditorialDetailComponent,
    EditorialCreateComponent
  ]
})
export class EditorialModule { }
