export class Pasaje {
    dnipasajero: string;
    precio: number;
    categoriapasajero: string;
    fechacompra: Date;

    Pasaje(dnipasajero?:string, precio?:number, categoriapasajero?:string, fechacompra?:Date){
        this.dnipasajero=dnipasajero;
        this.precio=precio;
        this.categoriapasajero=categoriapasajero;
        this.fechacompra=fechacompra;
    }
}
