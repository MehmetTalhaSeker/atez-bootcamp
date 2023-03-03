import { describe, expect, it } from "vitest";
import { ProductApi } from "./Product";
import {
  ILaptop,
  IProduct,
  ISmartPhone,
  ITablet,
  ITelevision,
} from "../model/Product";
import { ProductService } from "../service/Product";

const service = new ProductService();
const api = new ProductApi(service);

const ip8 = {
  id: 1,
  title: "iPhone 8",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  color: "Green",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
const abra7 = {
  id: 7,
  title: "Abra A7",
  description: "An Monster laptop which is nothing like apple",
  price: 349,
  discountPercentage: 12.96,
  rating: 2.69,
  stock: 80,
  brand: "Monster",
  screenDimentions: 17,
  category: "laptop",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
const ipad = {
  id: 14,
  title: "IPad Air",
  description: "An Apple product which is nothing like apple",
  price: 1449,
  discountPercentage: 12.96,
  rating: 2.69,
  stock: 12,
  brand: "Apple",
  celluar: false,
  wifi: true,
  color: "blue",
  category: "tablet",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
const bravia = {
  id: 10,
  title: "BRAVIA",
  description: "An Sonny TV which is nothing like apple",
  price: 1449,
  discountPercentage: 12.96,
  rating: 2.69,
  stock: 12,
  brand: "HP",
  smartTv: true,
  category: "television",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
const secondElement = {
  id: 2,
  title: "iPhone X",
  description: "An apple mobile which is nothing like apple",
  price: 649,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  color: "Black",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};

describe("product api tests", function () {
  it("should success", function () {
    expect(api.findOne(1) as ISmartPhone).toEqual(ip8 as ISmartPhone);
    expect(api.findOne(7) as ILaptop).toEqual(abra7 as ILaptop);

    expect(api.findAll().length).toEqual(15);
    expect(api.findAll()[0]).toEqual(ip8 as ISmartPhone);

    expect(api.findByCategory("tablet").length).toEqual(2);
    expect(api.findByCategory("tablet")[0]).toEqual(ipad as unknown as ITablet);

    expect(api.findByText("SoNny").length).toEqual(4);
    expect(api.findByText("SoNny")[0]).toEqual(bravia as ITelevision);

    expect(api.findOneAndDelete(1).length).toEqual(14);
    expect(api.findOneAndDelete(1)[0]).toEqual(secondElement as IProduct);
  });
});
