import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { PersonajesService } from './personajes.service';

describe('PersonajesService', () => {

  let service: PersonajesService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ],
      providers: [ PersonajesService ]
    });
    service = TestBed.inject(PersonajesService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    // expect(service).toBeTruthy();
    expect(service.getPeople).length > 0;
  });

});
