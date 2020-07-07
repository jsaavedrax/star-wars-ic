import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FilmsService } from './films.service';

describe('FilmsService', () => {

  let service: FilmsService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ],
      providers: [ FilmsService ]
    });

    service = TestBed.get(FilmsService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);

  });

  /*
  it('should be created', () => {
    expect(service.getFilms).length > 0;
  }); */

});
