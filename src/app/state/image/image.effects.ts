import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, flatMap } from 'rxjs/operators';
import * as fromImageActions from './image.actions';
import { ImageService } from '../../services/image/image.service';

import * as fromErrorActions from '../error';

@Injectable()

export class ImageEffects {

  @Effect() loadImages$ = this.actions$.pipe(
    ofType(fromImageActions.ImageActionTypes.LoadGiphyImages),
    exhaustMap((action: fromImageActions.LoadGiphyImages) =>
    this.imageService.getAll(action.query, action.offset, action.limit)
      .pipe(
        flatMap((payload) => [new fromImageActions.UpdateGiphyImages(payload)]),
        catchError((error) => [new fromErrorActions.HandleError(error)]
    ))));

  constructor(
    private readonly actions$: Actions,
    private readonly imageService: ImageService
  ) { }
}
