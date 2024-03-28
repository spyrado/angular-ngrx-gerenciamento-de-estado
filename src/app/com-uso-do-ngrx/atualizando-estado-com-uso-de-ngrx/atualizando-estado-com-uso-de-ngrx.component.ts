import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IAppState,
  decrementaContador,
  incrementaContador,
} from './store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-atualizando-estado-com-uso-de-ngrx',
  templateUrl: './atualizando-estado-com-uso-de-ngrx.component.html',
  styleUrls: ['./atualizando-estado-com-uso-de-ngrx.component.scss'],
})
export class AtualizandoEstadoComUsoDeNgrxComponent {
  public contador$ = this._store
    .select('app')
    .pipe(map((data) => data.contador));

  constructor(private _store: Store<{ app: IAppState }>) {}

  incrementaContador() {
    this._store.dispatch(incrementaContador());
  }

  decrementaContador() {
    this._store.dispatch(decrementaContador());
  }
}
