import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private httpCliente: HttpClient) { }

  getVehiculos(){
    return this.httpCliente.get("https://swapi.dev/api/films/");
  }
}
