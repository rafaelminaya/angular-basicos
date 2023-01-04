import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  // get : El get es prácticamente tratada como una propiedad, pero que al ser invocada realizada su implementación.
  // getters
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad} `;
  }

  cambiarNombre(): void {
    console.log('cambiarNombre');
    this.nombre = 'Spriderman';
  }

  cambiarEdad(): void {
    console.log('cambiarEdad');
    this.edad = 30;
  }
}
