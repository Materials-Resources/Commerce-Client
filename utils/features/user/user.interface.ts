interface userI {
  firstName: string;
  lastName: string;
  customerId: string;
  profileImg: string;
}

interface cartI {
  items: [cartItemsI];
  cartTotal: number;
}
interface cartItemsI {
  itemId: string;
  price: string;
  productImg: string;
}

export type { userI, cartI };
