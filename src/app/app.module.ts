import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AtualizandoEstadoSemUsoDeNgrxModule } from './atualizando-estado-sem-uso-de-ngrx/atualizando-estado-sem-uso-de-ngrx.component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AtualizandoEstadoSemUsoDeNgrxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
