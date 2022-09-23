export class Product {
  id: Number;
  title: string;
  price: Number;
  image: string;
  description: string;
  quantity?: number;

  constructor() {
    this.id = 0;
    this.title = '';
    this.price = 0;
    this.image = '';
    this.description = '';
    this.quantity = 0;
  }
}
