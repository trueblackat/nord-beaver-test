import httpClient from '@/api/httpClient.ts';
import { IInventoryItem } from '@/types/inventory.ts';

type TInventoriesResponse = {
  data: {
    inventory: IInventoryItem[],
  };
};

// eslint-disable-next-line import/prefer-default-export
export const getInventoryEndpoint = (caseName: string) => httpClient
  .get('/vueDevTestTask-getInventoryState', { params: { case: caseName } })
  .then(({ data }: TInventoriesResponse) => data);
