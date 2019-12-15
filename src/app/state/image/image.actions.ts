import { Action } from '@ngrx/store';

export enum ImageActionTypes {
  LoadGiphyImages = '[Images] LoadGiphyImages',
  UpdateGiphyImages = '[Images] UpdateGiphyImages'
}

export class LoadGiphyImages implements Action {
  readonly type = ImageActionTypes.LoadGiphyImages;
  constructor(public query: string, public offset: number, public limit?: number) {}
}

export class UpdateGiphyImages implements Action {
  readonly type = ImageActionTypes.UpdateGiphyImages;
  constructor(public payload: any) {}
}

export type ImageSearchActions = LoadGiphyImages | UpdateGiphyImages ;
