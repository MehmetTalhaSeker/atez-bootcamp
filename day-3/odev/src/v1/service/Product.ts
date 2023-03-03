import {
  ILaptop,
  IProduct,
  ISmartPhone,
  ITablet,
  ITelevision,
} from "../model/Product";
import { dummyData } from "../db/mockData";

interface IProductService {
  findOne(id: string | number): IProduct | undefined;

  findAll<T extends IProduct>(): IProduct[];

  findByCategory<T extends IProduct>(category: string): IProduct[];

  findByText<T extends IProduct>(input: string): IProduct[];

  // ek olarak bu da yapılabilir
  // findOneAndUpdate<T extends IProduct>(id: string | number, request: T): void;

  findOneAndDelete: (id: string | number) => IProduct[];
}

export class ProductService implements IProductService {
  findOne<T extends IProduct>(id: string | number): IProduct | undefined {
    return dummyData.find((product) => {
      if (product.id === id) return product as IProduct;
    });
  }

  findAll<T extends IProduct>(): IProduct[] {
    const result: IProduct[] = [];
    dummyData.map((product) => {
      switch (product.category) {
        case "smartphones":
          result.push(product as unknown as ISmartPhone);
          break;
        case "laptop":
          result.push(product as ILaptop);
          break;
        case "television":
          result.push(product as ITelevision);
          break;
        case "tablet":
          result.push(product as unknown as ITablet);
          break;
      }
    });

    return result;
  }

  findByCategory<T extends IProduct>(category: string): IProduct[] {
    return dummyData.filter((product) => {
      if (product.category === category) return product as IProduct;
    });
  }

  findByText<T extends IProduct>(input: string): IProduct[] {
    const result: IProduct[] = [];
    dummyData.map((product) => {
      if (product.description.toLowerCase().includes(input.toLowerCase())) {
        result.push(product as IProduct);
      }
    });

    return result;
  }

  findOneAndDelete(id: string | number): IProduct[] {
    return dummyData.filter((product) => product.id !== id);
  }
}
