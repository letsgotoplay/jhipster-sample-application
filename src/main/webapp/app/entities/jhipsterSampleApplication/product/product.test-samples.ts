import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
};

export const sampleWithPartialData: IProduct = {
  id: 78560,
  price: 34739,
  liveDate: dayjs('2023-06-17T17:44'),
};

export const sampleWithFullData: IProduct = {
  id: 7747,
  version: 88494,
  productId: 'deposit',
  name: 'Interface Table',
  price: 304,
  liveDate: dayjs('2023-06-18T05:23'),
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
