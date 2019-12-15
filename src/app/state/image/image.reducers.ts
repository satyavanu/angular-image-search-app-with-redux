import * as fromImageActions from './image.actions';


export interface ImageState {
  images: [];
  query: undefined;
  loading: true;
}

export const initialState: ImageState = {
  images: undefined,
  query: undefined,
  loading: true,
};

export function reducer(
  state: ImageState = initialState,
  action: fromImageActions.ImageSearchActions
): any {
  switch (action.type) {
    case fromImageActions.ImageActionTypes.LoadGiphyImages: {
      return { ...state, query: action.query};
    }
    case fromImageActions.ImageActionTypes.UpdateGiphyImages: {

      return { ...state, images: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
}
