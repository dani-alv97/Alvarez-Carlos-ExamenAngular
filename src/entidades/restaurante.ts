export class Restaurante {
    id:number;
    nombre:string;
    direccion: string;
    telefono: string;
    aforomax: number;
    listaReservaRes:Object[];
    constructor(){
        this.id=0;
        this.nombre="";
        this.direccion="";
        this.telefono="";
        this.aforomax=0;
        this.listaReservaRes=[];
    }
}