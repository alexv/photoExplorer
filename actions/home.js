/*
 * Contant Declarations
 */
export const PHOTOS_LOADED = 'PHOTOS_LOADED';
export const MORE_PHOTOS_LOADED = 'MORE_PHOTOS_LOADED';
export const SEARCH_FIELD_CHANGED = 'SEARCH_FIELD_CHANGED';

/*
 * Action Creators
 */
export const photosLoaded = photoData => ({
  type: PHOTOS_LOADED,
  payload: photoData,
});
export const morePhotosLoaded = photoData => ({
  type: MORE_PHOTOS_LOADED,
  payload: photoData,
});
export const searchFieldChanged = searchString => ({
  type: SEARCH_FIELD_CHANGED,
  payload: searchString,
});

/*
 * Thunk Action Creators
 */
export const fetchPhotos = ({ searchString }) => (dispatch) => {
  const webSafeString = searchString.replace(/\s/g, '+');
  fetch(`https://pixabay.com/api?key=8642121-3579382886baa758cf8891d9d&image_type=photo&q=${webSafeString}`)
    .then(response => response.json())
    .then(data => dispatch(photosLoaded(data)))
    .catch(console.error);
};

export const fetchMorePhotos = ({ searchString, page }) => (dispatch) => {
  const webSafeString = searchString.replace(/\s/g, '+');
  fetch(`https://pixabay.com/api?key=8642121-3579382886baa758cf8891d9d&image_type=photo&q=${webSafeString}&page=${page}`)
    .then(response => response.json())
    .then(data => dispatch(morePhotosLoaded({ hits: data.hits, page: page + 1 })))
    .catch(console.error);
};
