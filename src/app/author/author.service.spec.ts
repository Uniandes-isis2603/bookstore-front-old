import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { AuthorService } from "./author.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Author } from "./author";
import { environment } from "../../environments/environment";

describe("Service: Author", () => {
 let injector: TestBed;
 let service: AuthorService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.apiURL + "/authors";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [AuthorService],
   });
   injector = getTestBed();
   service = injector.get(AuthorService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getAuthors() should return 10 records", () => {
   let mockAuthors: Author[] = [];

   for (let i = 1; i < 11; i++) {
     let author = new Author(i,faker.lorem.sentence(), faker.date.past(), faker.image.imageUrl(), faker.lorem.sentence());
     mockAuthors.push(author);
   }

   service.getAuthors().subscribe((authors) => {
     expect(authors.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockAuthors);
 });
});
