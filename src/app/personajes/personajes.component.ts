import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  people: [];

  constructor(private personajesService: PersonajesService) { 
    this.people = [];
    this.getListPeople();
  }

  getListPeople(){
    this.personajesService.getPeople().subscribe(
      (data) => {
        console.log('DATA:', data);
        this.people = data ['results'] ;
      }
    );
    this.people;
   }


  ngOnInit(): void {
  }

}
