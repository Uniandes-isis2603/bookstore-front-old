import { Component, Input, OnInit } from '@angular/core';

import { Review } from "../../review/review";

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.scss']
})
export class BookReviewsComponent implements OnInit {
  public isCollapsed = true;
  @Input() bookReviews: Review[];

  constructor() { }


  ngOnInit() {
  }

}
