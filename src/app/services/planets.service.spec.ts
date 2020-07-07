import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PlanetsService } from './planets.service';

describe('PlanetsService', () => {

  let service: PlanetsService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ],
      providers: [ PlanetsService ]
    });

    service = TestBed.get(PlanetsService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  /*
  it('should be created', () => {
    expect(service.getPlanets).length > 0;
  }); */

});
