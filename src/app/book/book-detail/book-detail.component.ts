import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetail } from '../book-detail';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute,) { }

  bookId: number;
  bookDetail: BookDetail;

  getBookDetail(): void {
    this.bookService.getBookDetail(this.bookId)
      .subscribe(bookDetail => {
        this.bookDetail = bookDetail;
      });
  }

  getEdName(): string {
    return this.bookDetail.editorial.name
  }

  ngOnInit() {
    this.bookDetail = new BookDetail();
    this.bookDetail.reviews = []
    this.bookId = +this.route.snapshot.paramMap.get('id');
    this.getBookDetail();
  }

  getFechaCorta(): void {
    let shortDate: string = this.bookDetail.publishingdate + '';
    this.bookDetail.publishingdate = shortDate.split('T')[0];
  }

}
