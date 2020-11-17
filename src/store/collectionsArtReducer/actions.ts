export const SET_COLLECTIONS_ARTS = 'SET_COLLECTIONS_ARTS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const setCollectionsArts = (collectionsItem: IState) => ({
  type: SET_COLLECTIONS_ARTS,
  collectionsItem,
});

export const setCurrentPage = (num: number) => ({
  type: SET_CURRENT_PAGE,
  num,
});
