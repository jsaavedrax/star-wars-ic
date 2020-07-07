import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { VehiculosService } from './vehiculos.service';

describe('VehiculosService', () => {

  let service: VehiculosService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ],
      providers: [ VehiculosService ]
    });

    service = TestBed.get(VehiculosService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  /*
  it('should be created', () => {
    // expect(service).toBeTruthy();
    expect(service.getVehiculos).length > 0;
  }); */

});
