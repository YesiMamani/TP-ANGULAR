import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  venta: Pasaje;
  vector_ventas:Array<Pasaje>;
  precio_descuento: number=0;
  precio_actual:number=0;
  mostrar:boolean;
  cantMenor:number;
  cantAdulto:number;
  cantJubilado:number;

  constructor(private ventaservice: VentasService) { 
    this.venta=new Pasaje();
    this.vector_ventas=new Array<Pasaje>();
    this.cantMenor=0;
    this.cantAdulto=0;
    this.cantJubilado=0;
    this.listVenta();
  }

  ngOnInit(): void {
  }

  saveVenta(){
    this.venta.fechacompra=new Date();
    this.ventaservice.saveVenta(this.venta);
    if (this.venta.categoriapasajero=='a') {
      this.cantAdulto=this.cantAdulto+1;
    } else {
      if (this.venta.categoriapasajero=='m') {
        this.cantMenor=this.cantMenor+1;
      }else{
        this.cantJubilado=this.cantJubilado+1;
      }
    }
    this.venta=new Pasaje();
    this.mostrar=false;
    this.precio_descuento=0;
    this.precio_actual=0;
  }

  listVenta(){
    this.vector_ventas=this.ventaservice.listVenta();
  }

  limpiarVenta(){
    this.venta=new Pasaje();
  }

  elegirVenta(venta: Pasaje){
    this.venta = venta;
  }

  calcularDescuento(){
    if(this.venta.categoriapasajero=='m'){
      this.precio_descuento=(this.venta.precio*25)/100;
      this.precio_actual=this.venta.precio-this.precio_descuento;
      this.mostrar=true;
    }
    if(this.venta.categoriapasajero=='j'){
      this.precio_descuento=(this.venta.precio*50)/100;
      this.precio_actual=this.venta.precio-this.precio_descuento;
      this.mostrar=true;
    }
    if(this.venta.categoriapasajero=='a' || this.venta.categoriapasajero=='s'){
      this.mostrar=false;
    }
  }

  borrarVenta(venta: Pasaje){
    if (this.venta.categoriapasajero=='a') {
      this.cantAdulto=this.cantAdulto-1;
    } else {
      if (this.venta.categoriapasajero=='m') {
        this.cantMenor=this.cantMenor-1;
      }else{
        this.cantJubilado=this.cantJubilado-1;
      }
    }
    this.ventaservice.deleteVenta(venta);
    this.listVenta();
  }

  modificarVenta(){
    //actualizo fecha ultima modificación
    this.venta.fechacompra = new Date();

    this.ventaservice.updateVenta(this.venta);
    this.venta = new Pasaje();
    this.listVenta();
  }
}
