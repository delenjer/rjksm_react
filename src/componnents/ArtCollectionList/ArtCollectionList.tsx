import React from 'react';

export const ArtCollectionsList = (props: object) => {
  const { artCollections }: any = props;

  return (
    <section className="collection">
      <div className="collection__list">
        {
          artCollections.artObjects !== undefined && artCollections.artObjects.map((art: IArt) => {
            console.log(art.id);
          })
        }
      </div>
    </section>
  );
};
