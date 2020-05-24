import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  vector_venta:Array<Pasaje>;
  constructor() { 
    this.vector_venta=new Array<Pasaje>();
  }

  listVenta(){
    return this.vector_venta;
  }

  saveVenta(venta: Pasaje){
    this.vector_venta.push(venta)
  }

  deleteVenta(venta: Pasaje){
    var idBorrar = this.vector_venta.findIndex((item: Pasaje) => item.dnipasajero == venta.dnipasajero);
    this.vector_venta.splice(idBorrar, 1);
  }

  updateVenta(venta: Pasaje){
    var idBorrar = this.vector_venta.findIndex((item: Pasaje) => item.dnipasajero == venta.dnipasajero);    
    this.vector_venta.splice(idBorrar, 1,venta);
  }
}
