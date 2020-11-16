import { SET_COLLECTIONS_ARTS } from './actions';

export const getArtCollections = (state: object) => state;

const initialState = {
  artCollections: [],
}

const collectionsArtReducer = (state = initialState, action:collectionsItemActionType) => {
  switch (action.type) {
    case SET_COLLECTIONS_ARTS:
      return {
        ...state,
        artCollections: action.collectionsItem,
      }

    default:
      return state;
  }
};

export default collectionsArtReducer;
