import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Author } from './author';
import { AuthorDetail } from "./author-detail";
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const authors = '/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<AuthorDetail[]> {
    return this.http.get<AuthorDetail[]>(API_URL + authors);
  }

  getAuthorDetail(authorId: number): Observable<AuthorDetail> {
    return this.http.get<AuthorDetail>(API_URL + authors + '/' + authorId);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(API_URL + authors, author);
  }

}
