import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import *as selectors from '../../store/store';
import { loadArtCollections } from '../../store/thunk/thunk';
import { ArtCollectionsList } from '../ArtCollectionList/ArtCollectionList';
import { setCurrentPage } from '../../store/collectionsArtReducer/actions';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const ArtCollection = () => {
  const artCollections:any = useSelector((state:IState) => selectors.getArtCollections(state));
  const isLoading = useSelector(state => selectors.getLoading(state));

  const pageSize:number = useSelector((state:IState) => state.artCollections.pageSize);
  const totalPicturesCount = useSelector((state:IState) => state
    .artCollections.totalPicturesCount);
  const currentPage = useSelector((state:IState) => state.artCollections.currentPage);

  const pagesCount = Math.ceil(totalPicturesCount / pageSize);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArtCollections(currentPage, pageSize));
  }, [currentPage, pageSize]);

  const handlePageClick = (page:{selected: number}) => {
    dispatch(setCurrentPage(page.selected + 1));
  };

  return (
    <>
      {
        !isLoading.isLoading ? (
          <>
            <Header />

            <main className="wrapper">
              <ArtCollectionsList {...artCollections} />

              <Footer
                {...isLoading}
                handlePageClick={handlePageClick}
                pagesCount={pagesCount}
                // @ts-ignore
                pageSize={pageSize}
              />
            </main>
          </>
        ) : (
          <div className="loader">Loading...</div>
        )
      }
    </>
  );
};
