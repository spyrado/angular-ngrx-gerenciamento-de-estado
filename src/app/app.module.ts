import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AtualizandoEstadoSemUsoDeNgrxModule } from './sem-uso-ngrx/atualizando-estado-sem-uso-de-ngrx/atualizando-estado-sem-uso-de-ngrx.component.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './com-uso-do-ngrx/atualizando-estado-com-uso-de-ngrx/store/app.state';
import { AtualizandoEstadoComUsoDeNgrxModule } from './com-uso-do-ngrx/atualizando-estado-com-uso-de-ngrx/atualizando-estado-com-uso-de-ngrx.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AtualizandoEstadoSemUsoDeNgrxModule,
    AtualizandoEstadoComUsoDeNgrxModule,
    StoreModule.forRoot({ app: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
