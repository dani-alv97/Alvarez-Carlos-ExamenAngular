import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/entidades/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-listar-reserva2',
  templateUrl: './listar-reserva2.component.html',
  styleUrls: ['./listar-reserva2.component.css']
})
export class ListarReserva2Component implements OnInit {
  nombre:string;
  reserva:Reserva[];
  constructor(private reservaService:ReservaService) { 
    this.nombre="";
    this.reserva=[];
  }

  ngOnInit(): void {
    this.reservaService.listarRestaurante("").subscribe(
      respuesta=> this.reserva=respuesta
    );
  }

  buscarNombre(){
    this.reservaService.listarRestaurante(this.nombre).subscribe(
      respuesta=> this.reserva=respuesta
    );
  }
}
