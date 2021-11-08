import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetail } from '../author-detail';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private authorService: AuthorService) { }

  @Input() authorDetail: AuthorDetail;

  getFechaCorta(): void {
    let shortDate: string = this.authorDetail.birthDate + '';
    this.authorDetail.birthDate = shortDate.split('T')[0];
  }

  ngOnInit() {

  }

}
