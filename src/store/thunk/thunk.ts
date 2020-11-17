import { getArtCollections } from '../../api/api';

import {setCollectionsArts} from '../collectionsArtReducer/actions';
import { setLoading } from '../loadReducer/actions';

export const loadArtCollections = (currentPage: number, pageSize: number) => {
  return (dispatch: (arg0: { type: string;}) => void) => {
    dispatch(setLoading(true));
    getArtCollections(currentPage, pageSize)
      .then(data => {
        dispatch(setCollectionsArts(data))
        dispatch(setLoading(false));
      })
  }
};
