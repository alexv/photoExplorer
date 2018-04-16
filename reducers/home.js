import { PHOTOS_LOADED, MORE_PHOTOS_LOADED, SEARCH_FIELD_CHANGED } from '../actions/home';

const initialState = {
  photos: [],
  searchPage: 0,
  searchField: '',
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case PHOTOS_LOADED:
      return {
        ...state,
        photos: action.payload.hits,
        searchPage: 1,
      };
    case MORE_PHOTOS_LOADED:
      return {
        ...state,
        photos: [...state.photos, ...action.payload.hits],
        searchPage: action.payload.page,
      };
    case SEARCH_FIELD_CHANGED:
      return {
        ...state,
        searchField: action.payload.text,
      };
    default:
      return state;
  }
}
