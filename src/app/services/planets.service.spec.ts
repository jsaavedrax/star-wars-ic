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
    service = TestBed.inject(PlanetsService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    // expect(service).toBeTruthy();
    expect(service.getPlanets).length > 0;
  });

});
