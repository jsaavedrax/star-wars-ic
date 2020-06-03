import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private httpCliente: HttpClient) { }

  getPeople(){
    return this.httpCliente.get("http://swapi.dev/api/people/");
  }

}
