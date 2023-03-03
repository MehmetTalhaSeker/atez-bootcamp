import { ProductService } from "../service/Product";

// Bu katmanda pagination, middleware'den geçen ama yine de bazı kontrol isteyen işlemler vs. yapılabilir.
// Bu nedenle 2-3 farklı katman kullanmak bence kesinlikle gereklidir. Hem okunabilirlik hem de abstraction açısından çok faydalıdır.
export class ProductApi {
  service: ProductService;
  constructor(service: ProductService) {
    this.service = service;
  }
  findOne(id: string | number) {
    return this.service.findOne(id);
  }

  findAll() {
    return this.service.findAll();
  }

  findByCategory(category: string) {
    return this.service.findByCategory(category);
  }

  findByText(input: string) {
    return this.service.findByText(input);
  }

  findOneAndDelete(id: string | number) {
    return this.service.findOneAndDelete(id);
  }
}
