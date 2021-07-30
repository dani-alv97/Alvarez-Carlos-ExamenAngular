import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string = "http://localhost:8080/ExamenFinal/rest";

  constructor(private http: HttpClient) { 

  }

  registrarCliente(nombre: string, apellido: string, cedula: string, direccion: string, telefono: string, correo: string): Observable<any> {
    let crearcliente = new HttpParams().set("nombre", nombre).set("apellido", apellido).set("cedula", cedula).set("direccion", direccion).set("telefono", telefono).set("correo", correo)
    return this.http.post(`${this.url}/cliente/registrarcliente`, crearcliente)
  }
}
