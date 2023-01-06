import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input : le indica a angular que esta propiedad vendrá del componente padre.
  // Se le puede añadir un alias para utilizarse en el template del padre, ejemplo: @Input('data')
  /*
  @Input()
  personajes: Personaje[] = [];
  */

  // GETTER
  get personajes() {
    return this.dbzService.personajes;
  }

  // CONSTRUCTOR - inyección de dependencias
  constructor(private dbzService: DbzService) {}
}
