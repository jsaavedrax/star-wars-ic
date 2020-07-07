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

    service = TestBed.get(PersonajesService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  it('should retieve posts from the API via GET', () => {
    const dummyPosts = [
      {userId: '1', id:1, body: 'Hello word', tittle: 'API Star Wars' },
      {userId: '2', id:2, body: 'Hello word', tittle: 'API Star Wars 2' },
    ];
  })

  it('should be created service.getPeople length > 0', () => {
    expect(service.getPeople).length > 0;
  });

});
