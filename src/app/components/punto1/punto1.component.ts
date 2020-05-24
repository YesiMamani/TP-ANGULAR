import { Component, OnInit } from '@angular/core';
import { Mensaje} from '../../models/mensaje';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  mensaje: Mensaje;
  caracteresRest:number;
  caracteresMax:number;

  constructor() { 
    this.mensaje=new Mensaje();
    this.caracteresMax=120;
    this.caracteresRest=120;
  }

  ngOnInit(): void {
  }

  actualizarCaracteresRestantes(){
    this.caracteresRest=this.caracteresMax-this.mensaje.texto.length;
  }

  limpiarFormulario(){
    this.mensaje=new Mensaje();
  }

  enviarMensaje(){
    alert('Mensaje Enviado');
    this.limpiarFormulario();
  }
}
