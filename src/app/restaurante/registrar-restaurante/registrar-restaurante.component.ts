import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { Restaurante } from 'src/entidades/restaurante';

@Component({
  selector: 'app-registrar-restaurante',
  templateUrl: './registrar-restaurante.component.html',
  styleUrls: ['./registrar-restaurante.component.css']
})
export class RegistrarRestauranteComponent implements OnInit {
  nombre:string;
  direccion:string;
  telefono:string;
  aforomax:number;

  constructor(private restauranteService:RestauranteService, private router: Router) { 
    this.nombre="";
    this.direccion="";
    this.telefono="0";
    this.aforomax=0;
  }

  ngOnInit(): void {
  }

  registrarRestaurante(){
    this.restauranteService.registrarRestaurante(this.nombre, this.direccion, this. telefono, this.aforomax).subscribe(
      respuesta => {
        let restaurante = respuesta;
        restaurante = JSON.stringify(restaurante);
        sessionStorage.setItem("restaurante", restaurante);
        alert("Restaurante Creado")
      }
    )
  }

  public inputValidatorLetras(event: any) {
    //console.log(event.target.value);
    const pattern = /^[0-9]$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]{2,254}/g, "");
      // invalid character, prevent input

    }
  }

  public inputValidatorNumero(event: any) {
    //console.log(event.target.value);
    const pattern = /^[a-zA-Z]$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input

    }
  }

}
