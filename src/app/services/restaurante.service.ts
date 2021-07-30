import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  url: string = "http://localhost:8080/ExamenFinal/rest";

  constructor(private http: HttpClient) { 

  }

  registrarRestaurante(nombre: string, direccion: string, telefono: string, aforomax: number): Observable<any>{
    let crearRestaurante = new HttpParams().set("nombre", nombre).set("direccion", direccion).set("telefono", telefono).set("aforomax", aforomax)
    return this.http.post(`${this.url}/restaurante/registrarestaurante`, crearRestaurante)
  }
}
