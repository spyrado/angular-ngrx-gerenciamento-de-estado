import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtualizandoEstadoComUsoDeNgrxComponent } from './atualizando-estado-com-uso-de-ngrx.component';
import { ExibeContadorComNgrxComponent } from '../exibe-contador-com-ngrx/exibe-contador-com-ngrx.component';

@NgModule({
  declarations: [
    AtualizandoEstadoComUsoDeNgrxComponent,
    ExibeContadorComNgrxComponent,
  ],
  imports: [CommonModule],
  exports: [AtualizandoEstadoComUsoDeNgrxComponent],
})
export class AtualizandoEstadoComUsoDeNgrxModule {}
