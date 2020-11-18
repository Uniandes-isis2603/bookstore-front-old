import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book/book-list/book-list.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { EditorialListComponent } from './editorial/editorial-list/editorial-list.component';
import { EditorialDetailComponent } from "./editorial/editorial-detail/editorial-detail.component";
import { BookDetailComponent } from "./book/book-detail/book-detail.component" ;
import { AuthorDetailComponent } from "./author/author-detail/author-detail.component" ;
import { AuthorCreateComponent } from "./author/author-create/author-create.component" ;

const routes: Routes = [

  {
      path: 'books',
      children: [
        {
            path: 'list',
            component: BookListComponent
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
            path: 'list',
            component: EditorialListComponent
        },
        {
          path: ':id',
          component: EditorialDetailComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
