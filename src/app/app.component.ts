import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-calc';
  titulo:string = 'Aplicación de calculadora';
  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  sumar():number{
    this.resultado = this.operandoA + this.operandoB;
    return this.resultado;
  }
}
