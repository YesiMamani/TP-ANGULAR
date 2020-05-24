export class Mensaje {
    para: number;
    desde: number;
    texto: string;
    fechaEnvio:Date;

    Mensaje(para?:number, desde?:number, texto?:string, fechaEnvio?:Date){
        this.para=para;
        this.desde=desde;
        this.texto=texto;
        this.fechaEnvio=fechaEnvio;
    }
}
