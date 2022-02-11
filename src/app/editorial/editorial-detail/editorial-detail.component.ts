import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorialDetail } from '../editorial-detail';
import { EditorialService } from '../editorial.service';

@Component({
  selector: 'app-editorial-detail',
  templateUrl: './editorial-detail.component.html',
  styleUrls: ['./editorial-detail.component.scss'],
})
export class EditorialDetailComponent implements OnInit {
  @Input() editorialDetail: EditorialDetail;
  editorialId: number;

  constructor(
    private editorialService: EditorialService,
    private route: ActivatedRoute
  ) {}

  getEditorialDetail(): void {
    // this.editorialService.getEditorialDetail(this.editorialId)
    //   .subscribe(editorialDetail => {
    //     this.editorialDetail = editorialDetail
    //   });
    this.editorialDetail = this.editorialService.getEditorialDetail(
      this.editorialId
    );
  }

  ngOnInit() {
    this.editorialId = +this.route.snapshot.paramMap.get('id');
    console.log('EdID', this.editorialId);
    if (this.editorialId) {
      this.editorialDetail = new EditorialDetail();
      this.getEditorialDetail();
    }
  }
}
