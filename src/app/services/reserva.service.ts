import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/entidades/cliente';
import { Reserva } from 'src/entidades/reserva';
import { Restaurante } from 'src/entidades/restaurante';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url:string = "http://localhost:8080/ExamenFinal/rest";

  constructor(private http:HttpClient) { 

  }
  registrarReserva(numeroCedula: string, nombreRestaurante: string, numeroPersonas:number, fecha:string, hora:string ): Observable<any>{
    let crearReserva = new HttpParams().set("numeroCedula", numeroCedula).set("nombreRestaurante", nombreRestaurante).set("numeroPersonas", numeroPersonas).set("fecha", fecha).set("hora", hora)
    return this.http.post(`${this.url}/reserva/crearreserva`, crearReserva);
  }

  listarCliente(cedula:string): Observable<any>{
    return this.http.get(`${this.url}/reserva/listarcliente/${cedula}`);
  }
  listarRestaurante(nombre:string): Observable<any>{
    return this.http.get(`${this.url}/reserva/listarestaurante/${nombre}`);
  }
}
