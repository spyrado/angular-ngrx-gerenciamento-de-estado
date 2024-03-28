import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AtualizandoEstadoSemUsoDeNgrxComponent } from './atualizando-estado-sem-uso-de-ngrx.component';
import { ExibeContadorSemNgrxComponent } from '../exibe-contador-sem-ngrx/exibe-contador-sem-ngrx.component';

@NgModule({
  declarations: [
    ExibeContadorSemNgrxComponent,
    AtualizandoEstadoSemUsoDeNgrxComponent,
  ],
  imports: [BrowserModule],
  exports: [AtualizandoEstadoSemUsoDeNgrxComponent],
})
export class AtualizandoEstadoSemUsoDeNgrxModule {}
