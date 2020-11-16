import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import collectionsArtReducer, *as selectorsArtCollections from './collectionsArtReducer/index';

export const getArtCollections = (state:IState) => selectorsArtCollections.getArtCollections(state.artCollections);

const rootReducer = combineReducers({
  artCollections: collectionsArtReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
