import { Order } from "../../api/orderApi";

const data: Order[] = [
  {
    id: 1,
    clientId: 1,
    date: new Date(),
    total: 2.95,
    items: [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        quantity: 1,
        subTotal: 109.95
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        price: 22.3,
        quantity: 1,
        subTotal: 22.3
      },
    ]
  },
  {
    id: 2,
    clientId: 1,
    date: new Date(),
    total: 100,
    items: [
    ]
  },
  {
    id: 3,
    clientId: 1,
    date: new Date(),
    total: 120,
    items: []
  }
];

export default data;
