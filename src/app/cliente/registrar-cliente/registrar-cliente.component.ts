import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/entidades/cliente';


@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
  nombre:string;
  apellido:string;
  cedula:string;
  direccion:string;
  telefono:string;
  correo:string;

  constructor(private clienteService:ClientesService, private router: Router) { 
    this.nombre="";
    this.apellido="";
    this.cedula="";
    this.direccion="";
    this.telefono="";
    this.correo="";
  }
  ngOnInit(): void {
  }

  registrarCliente(){
    this.clienteService.registrarCliente(this.nombre, this.apellido, this.cedula, this.direccion, this.telefono, this.correo).subscribe(
      respuesta => {
        let cliente = respuesta;
        cliente = JSON.stringify(cliente);
        sessionStorage.setItem("cliente", cliente);
        alert("Cliente Creado")
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
