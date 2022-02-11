import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorDetail } from '../author-detail';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  authors: AuthorDetail[];
  selected: boolean = false;
  selectedAuthor: Author;

  orderValue: String = 'Names A-Z';

  constructor(private authorService: AuthorService) {}

  getAuthors(): void {
    // this.authorService
    //   .getAuthors()
    //   .subscribe((authors) => (this.authors = authors));
    this.authors = this.authorService.getAuthors();
  }

  getAuthorsLength(): Number {
    return this.authors.length;
  }

  getFechaCorta(date: any): any {
    var shortDate: string = date + '';
    return shortDate.split('T')[0];
  }

  getBooksLength(): Number {
    return this.authors.length;
  }

  setOrderValue(value: String): void {
    this.orderValue = value;
  }

  ngOnInit() {
    this.getAuthors();
  }

  onSelected(a: Author) {
    this.selected = true;
    this.selectedAuthor = a;
  }
}
