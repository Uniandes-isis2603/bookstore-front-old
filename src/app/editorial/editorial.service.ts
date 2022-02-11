import { Injectable } from '@angular/core';

import { Editorial } from './editorial';
import { EditorialDetail } from './editorial-detail';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EDITORIALS } from '../editorial/editorial-list/mock-editorials';

const API_URL = environment.apiURL;
const editorials = '/editorials';

@Injectable({
  providedIn: 'root',
})
export class EditorialService {
  constructor(private http: HttpClient) {}

  /*
   * Returns the Observable object containing the list of editorials retrieved from the API
   * @returns The list of books in real time
   */
  getEditorials(): EditorialDetail[] {
    //return this.http.get<EditorialDetail[]>(API_URL + editorials);
    return <EditorialDetail[]>EDITORIALS;
  }

  /**
   * Returns the Observable object containing the editorial retrieved from the API
   * @returns The editorial
   */
  getEditorialDetail(editorialId: number): EditorialDetail {
    // return this.http.get<EditorialDetail>(
    //   API_URL + editorials + '/' + editorialId
    // );
    var returnEditorial: EditorialDetail;
    returnEditorial = new EditorialDetail();
    EDITORIALS.map((editorial) => {
      if (editorial.id === editorialId) {
        returnEditorial = editorial;
      }
    });
    return returnEditorial;
  }

  /**
   * Creates an editorial
   * @param editorial The editorial which will be created
   * @returns The confirmation of the editorial's creation
   */

  createEditorial(editorial: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(API_URL + editorials, editorial);
  }
}
