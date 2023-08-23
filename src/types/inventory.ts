import { EFilterTypes } from './filters.ts';

export interface IInventoryItem {
  id: string;
  type: EFilterTypes;
  name: string;
  imageUrl: string;
  count?: number;
  cooldown?: number;
  charges?: number;
  maxCharges?: number;
}
