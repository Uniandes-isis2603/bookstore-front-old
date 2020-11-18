import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorDetail } from '../author-detail';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {

  authorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private authorService: AuthorService) { }

  cancelCreation(): void {
    this.toastrService.warning('The author wasn\'t created', 'Author creation');
    this.router.navigate(['/authors/list']);
    this.authorForm.reset();
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  createAuthor(author: AuthorDetail) {
    const a = this.authorForm.controls.birthDate.value;
    const dateB: Date = new Date(a);
    author.birthDate = dateB;
    this.authorService.createAuthor(author)
      .subscribe(author => {
        this.toastrService.success('The author was created successfully');
        this.authorForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }
}
