import { Cliente } from "./cliente";
import { Restaurante } from "./restaurante";

export class Reserva{
    id:number;
    cliente:Cliente;
    restaurante:Restaurante;
    numeroPersonas:number;
    fecha:string;
    hora:string;
    constructor(){
        this.id=0;
        this.cliente = new Cliente();
        this.restaurante = new Restaurante();
        this.numeroPersonas = 0;
        this.fecha = "";
        this.hora = "";
    }
}