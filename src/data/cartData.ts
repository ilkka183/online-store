import { Cart } from "../services/cartService";

class CartTable {
  public get(): Cart[] {
    console.log(this.data);

    return this.data;
  }

  public delete(id: string): boolean {
    let newData = this.data.filter(item => item.id !== id);
    this.data = newData;

    console.log(this.data);

    return true;
  }

  private data: Cart[] = [
  {
    id: '1',
    price: 39.99,
    currency: 'EUR',
    name: 'Ferragamo bag',
    description: 'Tan, 40mm',
    quantity: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: '2',
    price: 39.99,
    currency: 'EUR',
    name: 'Bamboo Tan',
    description: 'Tan, 40mm',
    quantity: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: '3',
    price: 39.99,
    currency: 'EUR',
    name: 'Yeezy Sneakers',
    description: 'Tan, 40mm',
    quantity: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
  },
];
}

const cart = new CartTable();

export default cart;
