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

  authorId: number;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) {}

  @Input() authorDetail: AuthorDetail;

  getFechaCorta() {
    let shortDate: string = this.authorDetail?.birthDate + '';
    return shortDate.split('T')[0];
  }

  ngOnInit() {
    console.log("Author detail")
    this.authorId = +this.route.snapshot.paramMap.get('id');
    if(this.authorId){
      this.authorService.getAuthorDetail(this.authorId).subscribe(author=>{
        this.authorDetail = author;
      })
    }
  }

}
