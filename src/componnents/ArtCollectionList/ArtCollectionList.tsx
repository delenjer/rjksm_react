import React from 'react';

import { ArtCollectionItem } from '../ArtCollectionItem/ArtCollectionItem';

export const ArtCollectionsList = (props: IState) => {
  const { artCollections } = props;

  return (
    <section className="collection">
      <div className="collection__list">
        {
          artCollections.artObjects && artCollections.artObjects.map((art) => (
            <ArtCollectionItem key={art.id} art={art} />
          ))
        }
      </div>
    </section>
  );
};
