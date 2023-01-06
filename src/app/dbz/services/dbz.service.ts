import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

// @Injectable() : Este decorador indica que la clase se va a inyectar.
// El servicio solo se ejecutará cuando alguien lo requiera.
// El "servicio" es como una clase abstracta que manejará la fuente de datos.
@Injectable()
export class DbzService {
  // Añadimos el modfiicador private para que solo sea manipulado en este servicio.
  // El guión bajo suele ser un estándar para propiedades privadas.
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  // SETTER
  //  Usaremos el "operador stread" ya que los objetos en JS son enviados por referencia.
  // De esta forma separamos los elementos independientes del arreglo y creamos un nuevo arreglo,
  // para poder romper la referencia con el nuevo arreaglo.
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
