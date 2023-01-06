import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  // Propiedad recibida del componente padre
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  /*
    - Emitiremos esta propiedad hacia el componente padre
    - @Output : Sirve para emitir eventos, por lo que la propiedad debe ser instanciada con "EventEmitter".
    - EventEmitter : Interface que necesita indicar un genérico para emitirlo al componente padre.
      Se especifica el tipo de dato a emitir en el diamante "<>".
    - emit() : Será al función que permitirá emitar la propiedad hacia el template.
      También es un "subscriber"
    - Alternativa : onNuevoPersonje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  */
  // @Output()
  // onNuevoPersonje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  // event : Variable de cualquier nombre que recibirá el evento del template contenido en "$event"
  // preventDefault() : Prevee el comportamiento por defecto del evento dado, en este caso de recargar la página.
  /*
  agregar(event: any) {
    event.preventDefault();
    console.log(event);
  }
  */
  constructor(private dbzService: DbzService) {}

  agregar() {
    // Validación de espacios vacios
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // imprimimos en consola
    console.log(this.nuevo);
    // emit() : El argumento es opcional, si no se envía, por defecto enviará "undefined"
    // this.onNuevoPersonje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    // reinicimoas valores
    this.nuevo = { nombre: '', poder: 0 };
  }

  /*
  cambiarNombre(event: any) {
    console.log(event.target.value);
  }
  */
}
