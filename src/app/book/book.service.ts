import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Book } from './book';
import { BookDetail } from './book-detail';
import { Review } from '../review/review';

import { BOOKS } from '../book/book-list/mock-books';

const API_URL = environment.apiURL;
const books = '/books';
const reviews = '/reviews';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): BookDetail[] {
    //return this.http.get<BookDetail[]>(API_URL + books);
    return <BookDetail[]>BOOKS;
  }

  getBookDetail(bookId: number): BookDetail {
    //return this.http.get<BookDetail>(API_URL + books + '/' + bookId);
    var returnBook: BookDetail;
    returnBook = new BookDetail();
    BOOKS.map((book) => {
      if (book.id === bookId) {
        returnBook = book;
      }
    });
    return returnBook;
  }

  createBook(book: Book): Observable<BookDetail> {
    return this.http.post<BookDetail>(API_URL + books, book);
  }

  createAuthorBook(idBook: number, idAuthor: number) {
    return this.http.post(
      API_URL + books + '/' + idBook + '/authors/' + idAuthor,
      undefined
    );
  }

  createReview(bookId: number, review: Review): Observable<Review> {
    return this.http.post<Review>(
      API_URL + books + '/' + bookId + reviews,
      review
    );
  }
}
