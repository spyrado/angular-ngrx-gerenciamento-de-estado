import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exibe-contador-sem-ngrx',
  templateUrl: './exibe-contador-sem-ngrx.component.html',
  styleUrls: ['./exibe-contador-sem-ngrx.component.scss'],
})
export class ExibeContadorSemNgrxComponent {
  @Input() contador = 0;
}
