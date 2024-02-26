export interface IProduct {
  id: string;
  product: string;
  brand: string;
  price: number;
}

export interface IRequestObj {
  key: string;
  value: string | number;
}