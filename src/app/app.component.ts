import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calc';
  operandoA = 0;
  operandoB = 0;
  resultado = 0;

  sumar(){
    this.resultado = this.operandoA + this.operandoB;
    return this.resultado;
  }
}
