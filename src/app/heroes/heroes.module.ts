import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// CommonModule : Ofrece directivas como *ngIf, *ngFor
@NgModule({
  declarations: [HeroeComponent, ListadoComponent], // Se indica qué piezas contiene el módulo
  exports: [ListadoComponent], // Componentes pertenecientes al módulo que quiero sean visibles afuera de este módulo
  imports: [CommonModule], // Indicamos los módulos a usar en el módulo actual
})
export class HeroesModule {}
