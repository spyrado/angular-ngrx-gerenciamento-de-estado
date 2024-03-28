import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exibe-contador',
  templateUrl: './exibe-contador.component.html',
  styleUrls: ['./exibe-contador.component.scss'],
})
export class ExibeContadorComponent {
  @Input() contador = 0;
}
