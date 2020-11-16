/// <reference types="react-scripts" />
interface IState {
  state: object;
  artCollections: [];
}

interface getCollectionsItem {
  collectionsItem: object;
}

interface collectionsItemActionType {
  collectionsItem: object;
  type: string;
}

interface IArt{
  art: object;
  id: string;
}

interface ICollections{
  artCollections: object;
}
