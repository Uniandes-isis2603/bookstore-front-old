import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { EditorialService } from "./editorial.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Editorial } from "./editorial";
import { environment } from "../../environments/environment";

describe("Service: Editorial", () => {
 let injector: TestBed;
 let service: EditorialService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.apiURL + "/editorials";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [EditorialService],
   });
   injector = getTestBed();
   service = injector.get(EditorialService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getEditorials() should return 10 records", () => {
   let mockEditorials: Editorial[] = [];

   for (let i = 1; i < 11; i++) {
     let editorial = new Editorial(i, faker.lorem.sentence());
     mockEditorials.push(editorial);
   }

   service.getEditorials().subscribe((Editorials) => {
     expect(Editorials.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockEditorials);
 });
});
