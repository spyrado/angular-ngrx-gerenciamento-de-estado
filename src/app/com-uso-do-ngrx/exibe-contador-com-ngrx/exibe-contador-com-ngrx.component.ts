import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from '../atualizando-estado-com-uso-de-ngrx/store/app.state';

@Component({
  selector: 'app-exibe-contador-com-ngrx',
  templateUrl: './exibe-contador-com-ngrx.component.html',
  styleUrls: ['./exibe-contador-com-ngrx.component.scss'],
})
export class ExibeContadorComNgrxComponent {
  public contador$ = this._store
    .select('app')
    .pipe(map((data) => data.contador));
  constructor(private _store: Store<{ app: IAppState }>) {}
}
