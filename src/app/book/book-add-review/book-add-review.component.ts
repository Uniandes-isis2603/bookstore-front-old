import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Review } from '../../review/review';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add-review',
  templateUrl: './book-add-review.component.html',
  styleUrls: ['./book-add-review.component.css']
})
export class BookAddReviewComponent implements OnInit {

  reviewForm: FormGroup;
  isCollapsed = true;
  @Input() book: Book;
  @Output() updateReviews = new EventEmitter();

  constructor(
    private bookService: BookService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      source: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createReview(review: Review) {
    const date = this.book.publishingdate;
    const formattedDate: Date = new Date(date);
    this.book.publishingdate = formattedDate;
    review.book = this.book;
    this.bookService.createReview(this.book.id, review)
      .subscribe(r => {
        this.toastrService.success('The review was created successfully');
        this.reviewForm.reset();
        this.updateReviews.emit();
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  cancelCreation(): void {
    this.toastrService.warning('The review wasn\'t created', 'Review creation');
    this.reviewForm.reset();
    this.updateReviews.emit();
  }

}
