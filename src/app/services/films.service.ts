import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpCliente: HttpClient) { }

  getFilms(){
    return this.httpCliente.get("https://swapi.dev/api/films/");
  }
}


