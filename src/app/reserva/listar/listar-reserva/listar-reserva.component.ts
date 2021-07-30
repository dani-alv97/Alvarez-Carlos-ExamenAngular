import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/entidades/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  cedula:string;
  reserva:Reserva[];
  constructor(private reservaService:ReservaService) { 
    this.cedula="";
    this.reserva=[];
  }

  ngOnInit(): void {
    this.reservaService.listarCliente("").subscribe(
      respuesta=> this.reserva=respuesta
    );
  }

  buscarCedula(){
    this.reservaService.listarCliente(this.cedula).subscribe(
      respuesta=> this.reserva=respuesta
    );
  }
}
