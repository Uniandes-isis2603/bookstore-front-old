import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Book } from './book';
import { BookDetail } from "./book-detail";
import { Review } from '../review/review';

const API_URL = environment.apiURL;
const books = '/books';
const reviews = '/reviews';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { }

  getBooks(): Observable<BookDetail[]> {
    return this.http.get<BookDetail[]>(API_URL + books);
  }

  getBookDetail(bookId: number): Observable<BookDetail> {
    return this.http.get<BookDetail>(API_URL + books + '/' + bookId);
  }

  createBook(book: Book): Observable<BookDetail> {
    return this.http.post<BookDetail>(API_URL + books, book);
  }

  createAuthorBook(idBook: number, idAuthor: number) {
    return this.http.post(API_URL + books + '/' + idBook + '/authors/' + idAuthor, undefined);
  }

  createReview(bookId: number, review: Review): Observable<Review> {
    return this.http.post<Review>(API_URL + books + '/' + bookId + reviews, review);
  }
}
