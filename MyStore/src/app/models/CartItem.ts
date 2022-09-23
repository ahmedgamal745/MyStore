export class CartItem {
  id: Number;
  quantity: number;
  product: { title: string; price: Number; image: string; description: string };

  constructor() {
    this.id = 0;
    this.quantity = 0;
    this.product = {
      title: '',
      price: 0,
      image: '',
      description: '',
    };
  }
}
