import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  HandleError = '[Error] HandleError'
}

export class HandleError implements Action {
  readonly type = ErrorActionTypes.HandleError;

  constructor(public error: Error) { }
}
export type ErrorActions = HandleError;
