import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports: [MainPageComponent], // exportamos el componente que usaremos en otro módulo
  imports: [CommonModule, FormsModule], // FormsModule : Permite usar el maneja de formularios tradicional de angular}
  providers: [DbzService], // Son los servicios que se va a utilizar el módulo. Estos servirán como singleton a lo largo del módulo.
})
export class DbzModule {}
