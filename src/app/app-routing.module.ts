import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from "./book/book-detail/book-detail.component";
import { BookCreateComponent } from "./book/book-create/book-create.component";

import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorDetailComponent } from "./author/author-detail/author-detail.component";
import { AuthorCreateComponent } from "./author/author-create/author-create.component";

import { EditorialListComponent } from './editorial/editorial-list/editorial-list.component';
import { EditorialDetailComponent } from "./editorial/editorial-detail/editorial-detail.component";
import { EditorialCreateComponent } from "./editorial/editorial-create/editorial-create.component";


const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: 'list',
        component: BookListComponent
      },
      {
        path: 'create',
        component: BookCreateComponent
      },
      {
        path: ':id',
        component: BookDetailComponent
      }
    ]
  },
  {
    path: 'authors',
    children: [
      {
        path: 'create',
        component: AuthorCreateComponent
      },
      {
        path: 'list',
        component: AuthorListComponent
      },
      {
        path: ':id',
        component: AuthorDetailComponent
      }
    ]
  },
  {
    path: 'editorials',
    children: [
      {
        path: 'create',
        component: EditorialCreateComponent
      },
      {
        path: 'list',
        component: EditorialListComponent
      },
      {
        path: ':id',
        component: EditorialDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: BookListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
