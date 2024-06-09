// types/index.ts

export interface List {
    id: number;
    name: string;
  }
  
  export interface Word {
    id: number;
    word: string;
    listId: number;
  }
  