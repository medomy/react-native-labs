import {STORE_MOVIE} from './store';

const initialState = {
  movs: [],
};

export function storeMov(state = initialState, action) {
  switch (action.type) {
    case STORE_MOVIE:
      return {...state, movs: action.payload};
    default:
      return state;
  }
}
