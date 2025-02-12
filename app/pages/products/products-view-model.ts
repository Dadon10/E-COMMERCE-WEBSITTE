import { Observable } from '@nativescript/core';
import { Product } from '../../models/product.model';
import { products } from '../../data/products';

export class ProductsViewModel extends Observable {
    private _products: Product[];

    constructor() {
        super();
        this._products = products;
    }

    get products(): Product[] {
        return this._products;
    }

    onProductTap(args: any) {
        const index = args.index;
        const product = this._products[index];
        console.log(`Product tapped: ${product.name}`);
        // TODO: Navigate to product details
    }
}