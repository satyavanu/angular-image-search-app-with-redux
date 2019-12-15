
import { ActionReducerMap } from '@ngrx/store';
import * as fromImages from './image/';
import * as fromError from './error/error.effects';


export interface State {
  images: fromImages.ImageState;
}


class InitialState implements State {
  readonly images = fromImages.initialState;
}

export const initialState = new InitialState();


export const reducers: ActionReducerMap<State> = {
  images: fromImages.reducer
}


export const effects = [
  fromImages.ImageEffects,
  fromError.ErrorEffects
];
