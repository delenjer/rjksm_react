import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type ArtProps = {
  art: {
    id: string;
    objectNumber: string;
    headerImage: {
      url: string;
    };
    longTitle: string;
  },
}

export const ArtCollectionItem = ({ art }: ArtProps) => {
  const [isLoadingImg, setLoadingImg] = useState(false);
  const highSrc = art.headerImage.url;

  useEffect(() => {
    loadHighRes(highSrc);
  }, [highSrc]);

  const loadHighRes = (imageSrc: string) => {
    const image = new Image();

    image.onload = () => {
      setLoadingImg(true);
    };

    image.src = imageSrc;
  };

  return (
    <>
      {
        isLoadingImg ? (
          <Link
            to={`/${art.objectNumber}/modal`}
            className="collection__item"
            style={{ backgroundImage: `url(${highSrc})` }}
          >
            <p className="collection__text">{art.longTitle}</p>
          </Link>
        ) : (
          <img src="./img/unnamed.png" alt="Img"/>
        )
      }
    </>
  );
};
