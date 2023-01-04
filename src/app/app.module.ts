import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

// Debemos tratar de agrupar nuestra aplicación por módulos
@NgModule({
  declarations: [AppComponent], // Componentes
  imports: [BrowserModule, HeroesModule, ContadorModule], // Otros módulos a usar en el módulo actual
  providers: [], // Son como servicios específicos hacia un módulo
  bootstrap: [AppComponent], // Componente principal
})
export class AppModule {}
