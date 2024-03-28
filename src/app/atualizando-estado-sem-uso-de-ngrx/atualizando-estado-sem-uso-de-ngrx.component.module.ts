import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExibeContadorComponent } from '../exibe-contador/exibe-contador.component';
import { AtualizandoEstadoSemUsoDeNgrxComponent } from './atualizando-estado-sem-uso-de-ngrx.component';

@NgModule({
  declarations: [
    ExibeContadorComponent,
    AtualizandoEstadoSemUsoDeNgrxComponent,
  ],
  imports: [BrowserModule],
  exports: [AtualizandoEstadoSemUsoDeNgrxComponent],
})
export class AtualizandoEstadoSemUsoDeNgrxModule {}
