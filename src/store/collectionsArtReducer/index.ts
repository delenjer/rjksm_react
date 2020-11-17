import { SET_COLLECTIONS_ARTS, SET_CURRENT_PAGE } from './actions';

export const getArtCollections = (state: object) => state;

const initialState = {
  artCollections: [],
  pageSize: 10,
  totalPicturesCount: 10000,
  currentPage: 1,
}

const collectionsArtReducer = (state = initialState, action:artCollectionsType) => {
  switch (action.type) {
    case SET_COLLECTIONS_ARTS:
      return {
        ...state,
        artCollections: action.collectionsItem,
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.num,
      };

    default:
      return state;
  }
};

export default collectionsArtReducer;
