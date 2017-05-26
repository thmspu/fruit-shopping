import {products as inventory} from 'inventory';

export class BasketItem {
  constructor(name, quantity) {
    this._name = name; //string
    this._quantity = quantity; //number
    // find the product details from the products array using the basket item name
    this.product = inventory.find(item => item.name.toLowerCase() === this.name.toLowerCase());
    if (!this.product) {
      throw new Error(`Product does not exist in Inventory, product key: ${name}`);
    }
  }

  get name() {
    return this._name;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (value <= 0)
      value = 0;
    return this._quantity = value;
  }

  increment() {
    this._quantity++;
  }

  decrement() {
    this._quantity--;
    if (this._quantity === 0) {
      throw new Error(`Product has zero or lesss items in basket: ${name}`);
    }
  }

  get price() {
    return this.product.price;
  }

  get itemTotal() {
    return this.product.price * this.quantity;
  }

  // Discount API Public

  get hasDiscounted() {
    // check if there is a discount, can extend function to all for more types of
    // discounts
    return !!this.product.discount;
  }

  get hasVolumneDiscounted() {
    //check if there is a discount and there is a volume discount
    return !!this.product.discount && !!this.product.discount.volume
  }

  //Shows discount string
  get discountNotice() {
    return !!this.hasVolumneDiscounted
      ? this.product.discount.volume.notice
      : '';
  }

  get recommendVolumneNotice() {
    //return boolean to recommend customer adds extra item for free to basket
    return !!this.hasVolumneDiscounted && this._volumeDiscountNotice(this.quantity, this.product.discount.volume.buy)
      ? this.product.discount.volume.recommendationNotice
      : this.product.discount.volume.notice;
  }

  get discountedTotal() {
    let total;
    //calculate basket line item price after volume discount
    if (this.hasVolumneDiscounted) {
      //price multiplied by volume discount quantity
      total = this.product.price * this._volumeDiscount(this.quantity, this.product.discount.volume.buy, this.product.discount.volume.pay);

    } else {
      total = this.product.price * this.quantity;
    }

    //parse float so we have two decimal places (currency)
    return parseFloat(total).toFixedNumber(2);
  }

  // Discount API Private Generic function to calculate volume discounts, for
  // eaxmple 3 for price of 2; or 5 for price of 3
  _volumeDiscount(quantity, volumeBuying, volumePaying) {
    //calcualte the modulus and then th divisior
    return Math.floor(quantity / volumeBuying) * volumePaying + (quantity % volumeBuying);
  }
  // Generic function to recommend adding 1 item to quanity which will trigger the
  // volume discount, i.e. free item in basket
  _volumeDiscountNotice(quantity, volumeBuying) {
    //add item to quantity and see if modulus of volume buy is zero
    return (quantity + 1) % volumeBuying === 0;
  }

}