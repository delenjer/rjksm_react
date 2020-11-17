/// <reference types="react-scripts" />

interface IState {
  artCollections: {
    elapsedMilliseconds: number,
    count: number,
    artObjects?: [
      {
        id: string
        objectNumber: string,
        title: string,
        longTitle: string,
        webImage: {
          guid: string,
          url: string,
        },
        headerImage: {
          guid: string,
          url: string,
        }
      }
    ],

    pageSize: number,
    totalPicturesCount: number,
    currentPage: number,
  };
}

interface artCollectionsType {
  type: string;
  collectionsItem: IState;
  num: number;
}

interface ILoadingAction {
  type: string;
  isLoading: boolean;
}

interface ILoading {
  isLoading: {
    isLoading: boolean,
  }
}
