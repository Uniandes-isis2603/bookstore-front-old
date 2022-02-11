import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/author/author';
import { AuthorService } from 'src/app/author/author.service';
import { Editorial } from 'src/app/editorial/editorial';
import { EditorialService } from 'src/app/editorial/editorial.service';
import { Book } from '../book';
import { BookDetail } from '../book-detail';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  providers: [DatePipe],
})
export class BookCreateComponent implements OnInit {
  authors: Author[];
  bookAuthors: Author[];
  bookForm: FormGroup;
  editorials: Editorial[];

  constructor(
    private dp: DatePipe,
    private bookService: BookService,
    private editorialService: EditorialService,
    private toastrService: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authorService: AuthorService
  ) {}

  getEditorials(): void {
    // this.editorialService.getEditorials().subscribe(
    //   (editorials) => {
    //     this.editorials = editorials;
    //   },
    //   (err) => {
    //     this.toastrService.error(err, 'Error');
    //   }
    // );
  }

  getAuthors(): void {
    // this.authorService.getAuthors()
    //   .subscribe(auth => {
    //     this.authors = auth;
    //   }, err => {
    //     this.toastrService.error(err, 'Error');
    //   });
  }

  buscarId(value, list) {
    for (const i of list) {
      if (i.name === value) {
        return i;
      }
    }
  }

  createBook(book: BookDetail) {
    if (!this.bookForm.valid) return;

    const date = this.bookForm.controls.publishingdate.value;
    const formattedDate: Date = new Date(date);
    book.publishingDate = formattedDate;
    const authorId = this.bookForm.get('authors').value;

    this.bookService.createBook(book).subscribe(
      (b) => {
        this.toastrService.success('The book was created successfully');
        this.bookService.createAuthorBook(b.id, authorId).subscribe(
          (b2) => {
            this.toastrService.success(
              'The author was associated successfully'
            );
            this.router.navigate(['/books/' + b.id]);
          },
          (err) => {
            this.toastrService.error(err, 'Error');
          }
        );

        this.bookForm.reset();
      },
      (err) => {
        this.toastrService.error(err, 'Error');
      }
    );
  }

  cancelCreation(): void {
    this.toastrService.warning("The book wasn't created", 'Book creation');
    this.router.navigate(['/books/list']);
    this.bookForm.reset();
  }

  ngOnInit() {
    this.getEditorials();
    this.getAuthors();

    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      authors: ['', [Validators.required]],
      publishingdate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      image: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
    });
  }
}
