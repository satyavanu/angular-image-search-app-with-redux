import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import * as fromErrorActions from './error.actions';
import { ErrorService } from '../../services/error/error.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorEffects {

  @Effect() public HandleError$: Observable<Action> = this.actions$.pipe(
    ofType(fromErrorActions.ErrorActionTypes.HandleError),
    flatMap((action: fromErrorActions.HandleError) => {
      this.errorService.handleError(action.error);
      return [];
    })
  );
  constructor(
    private actions$: Actions,
    private errorService: ErrorService) { }
}
