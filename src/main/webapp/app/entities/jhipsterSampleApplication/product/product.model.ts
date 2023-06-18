import dayjs from 'dayjs/esm';

export interface IProduct {
  id: number;
  version?: number | null;
  productId?: string | null;
  name?: string | null;
  price?: number | null;
  liveDate?: dayjs.Dayjs | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
