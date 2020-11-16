import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import *as selectors from '../../store/store';
import { loadArtCollections } from '../../store/thunk/thunk';
import { ArtCollectionsList } from '../ArtCollectionList/ArtCollectionList';

export const ArtCollection = () => {
  const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArtCollections());
  }, []);

  return (
    <ArtCollectionsList {...artCollections} />
  );
};
