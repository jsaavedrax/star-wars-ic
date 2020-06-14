import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: [];

  constructor(private vehiculosService: VehiculosService) {
    this.vehiculos = [];
    this.getListVehiculos();
   }

   getListVehiculos(){
    this.vehiculosService.getVehiculos().subscribe(
      (data) => {
        console.log('DATA:', data);
        this.vehiculos = data ['results'] ;
      }
    );
    this.vehiculos;
   }

   ngOnInit(): void {
  }

}
