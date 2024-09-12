  export interface BoucketItem {
    id: number;
    name: string;
    description: string;
    boucketListId: number;
  }
  
  export interface BoucketList{
    id: number;
    name: string;
    description: string;
    boucketItems: BoucketItem[];
  }
