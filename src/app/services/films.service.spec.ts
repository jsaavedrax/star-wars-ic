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
    service = TestBed.inject(FilmsService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    // expect(service).toBeTruthy();
    expect(service.getFilms).length > 0;
  });

});
