// type TProduct = {
//   id: number;
//   name: string;
//   img_url: string;
//   brand: string;
//   stock_quantity: number;
//   price: number;
//   rating: number;
//   description: string;
//   quantity?: number;
// };

export type TProduct = {
  name: string;
  img_url: string;
  brand: string;
  stock_quantity: number;
  price: number;
  rating: number;
  description: string;
  quantity: number;
  isDeleted: boolean;
};
