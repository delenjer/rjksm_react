import { getArtCollections } from '../../api/api';

import {setCollectionsArts} from '../collectionsArtReducer/actions';

export const loadArtCollections = () => {
  return (dispatch: (arg0: { type: string; collectionsItem: getCollectionsItem; }) => void) => {
    getArtCollections()
      .then(data => {
        dispatch(setCollectionsArts(data))
      })
  }
};
