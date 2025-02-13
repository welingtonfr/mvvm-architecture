import { Product } from '../Models/Product';

export class ProductService {
    static async getProducts(): Promise<Product[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Product(1, 'Product 1', '257892'),
                    new Product(2, 'Product 2', '257893'),
                    new Product(3, 'Product 3', '257894'),
            ]);
            }, 100);
        })
    }
}