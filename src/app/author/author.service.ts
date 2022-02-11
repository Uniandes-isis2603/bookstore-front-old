import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Author } from './author';
import { AuthorDetail } from './author-detail';
import { environment } from '../../environments/environment';

import { AUTHORS } from '../author/author-list/mock-authors';

const API_URL = environment.apiURL;
const authors = '/authors';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthors(): AuthorDetail[] {
    //return this.http.get<AuthorDetail[]>(API_URL + authors);
    return <AuthorDetail[]>AUTHORS;
  }

  getAuthorDetail(authorId: number): AuthorDetail {
    //return this.http.get<AuthorDetail>(API_URL + authors + '/' + authorId);
    var returnAuthor: AuthorDetail;
    returnAuthor = new AuthorDetail();
    AUTHORS.map((author) => {
      if (author.id === authorId) {
        returnAuthor = author;
      }
    });
    return returnAuthor;
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(API_URL + authors, author);
  }
}
