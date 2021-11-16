import { Component, OnInit } from '@angular/core';
import { EditorialDetail } from '../editorial-detail';
import { EditorialService } from '../editorial.service';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.scss']
})
export class EditorialListComponent implements OnInit {

  editorials: EditorialDetail[];

  constructor(private editorialService: EditorialService) { }

  getEditorials(): void {
    this.editorialService.getEditorials()
      .subscribe(editorials => {
        this.editorials = editorials;
      });
  }

  ngOnInit() {
    this.getEditorials();
  }

}
