import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <!-- Estas dobles llaves también soportan una expresión JS en su interior. -->
    <h1>{{ titulo }}</h1>

    <h3>
      La base es <strong> {{ base }} </strong>
    </h3>

    <!-- 
    - (click) : Tiene paréntesis, por lo que toda propiedad con paréntesis representa un evento.
    - Dentro podemos escribir una expresión con asignadicón de javascript.
    - NO se aconseja poner mucha lógica en el "template" sino en el "TS"
    - Ya que el template debe ser fácil de leer para poder editarlo rápidamente.
 -->

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  // Añadimos de forma opcional el modificador "public"
  // Al añadir el modificador ayuda mejorar la lectura del programador
  public titulo: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
