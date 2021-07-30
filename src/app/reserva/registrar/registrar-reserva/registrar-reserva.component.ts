import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/entidades/reserva';
import { Cliente } from 'src/entidades/cliente';
import { Restaurante } from 'src/entidades/restaurante';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {

  numeroCedula:string;
  nombreRestaurante:string;
  numeroPersonas:number;
  fecha:string;
  hora:string;
  constructor(private reservaservice:ReservaService) {
    this.numeroCedula = "";
    this.nombreRestaurante = "";
    this.numeroPersonas = 0;
    this.fecha = "";
    this.hora = "";
   }

  ngOnInit(): void {
    
  }
  registrarReserva(){
    this.reservaservice.registrarReserva(this.numeroCedula, this.nombreRestaurante, this.numeroPersonas, this.fecha, this.hora).subscribe(
      respuesta => {
        let reserva = respuesta;
        reserva = JSON.stringify(reserva);
        sessionStorage.setItem("reserva",reserva);
        alert("Reserva Creada")
      }
    )
  }

}
