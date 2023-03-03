export interface IProduct {
  title: string;
  description: string;
  price: number;
  rating: number;
  id: number | string;
  thumbnail: string;
  stock: number;
}

export interface ISmartPhone extends IProduct {
  color: string;
}

export interface ILaptop extends IProduct {
  discountPercentage: number;
  screenDimentions: number;
}

export interface ITablet extends ISmartPhone {
  cellular: boolean;
  wifi: boolean;
}

export interface ITelevision extends IProduct {
  smartTv: boolean;
}
