import {store} from '.';
import {STORE_MOVIE} from './store';

export function storeMovieAction(addedMovie) {
  const state = store.getState();
  if (state.movies) {
    if (state.movies.some(item => item.Title === addedMovie.Title)) {
      return {payload: state.movies, type: STORE_MOVIE};
    }
    return {
      type: STORE_MOVIE,
      payload: [addedMovie, ...state.movies],
    };
  }
  return {
    payload: [addedMovie],
    type: STORE_MOVIE,
  };
}
