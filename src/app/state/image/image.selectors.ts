import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ImageState } from './image.reducers';

export const getImageState = createFeatureSelector<ImageState>(
  'images'
);

export const getImages = () =>
  createSelector(
    getImageState,
    (state: ImageState) => state.images
  );
