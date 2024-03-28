import { createAction, createReducer, on } from '@ngrx/store';

export interface IAppState {
  contador: number;
}

export const appInitialState: IAppState = {
  contador: 0,
};

export const incrementaContador = createAction('[App] aumenta contador');
export const decrementaContador = createAction('[App] reduz contador');

export const appReducer = createReducer(
  appInitialState,
  on(incrementaContador, (state) => {
    state = {
      ...state,
      contador: state.contador + 1,
    };
    return state;
  }),
  on(decrementaContador, (state) => {
    state = {
      ...state,
      contador: state.contador - 1,
    };
    return state;
  })
);
