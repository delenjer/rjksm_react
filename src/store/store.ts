import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import collectionsArtReducer, *as selectorsArtCollections from './collectionsArtReducer/index';
import loadReducer, * as selectorsIsLoading from './loadReducer/index';

export const getArtCollections = (state:IState) => selectorsArtCollections.getArtCollections(state.artCollections);
export const getLoading = (state:any) => selectorsIsLoading
  .getLoading(state.isLoading);

const rootReducer = combineReducers({
  artCollections: collectionsArtReducer,
  isLoading: loadReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
