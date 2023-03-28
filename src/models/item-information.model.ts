import { ItemModel } from './item.model';

export interface ItemInformation extends ItemModel {
  id: number;
  description: string;
}
