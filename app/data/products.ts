import { Product } from '../models/product.model';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic T-Shirt',
    description: 'Comfortable cotton t-shirt',
    price: 29.99,
    imageUrl: 'https://picsum.photos/300/300',
    category: 'clothing'
  },
  {
    id: '2',
    name: 'Running Shoes',
    description: 'Lightweight running shoes',
    price: 89.99,
    imageUrl: 'https://picsum.photos/300/300',
    category: 'footwear'
  },
  {
    id: '3',
    name: 'Backpack',
    description: 'Durable everyday backpack',
    price: 59.99,
    imageUrl: 'https://picsum.photos/300/300',
    category: 'accessories'
  }
];