import {BasketItem} from 'basketItem';

export default class Basket {
  constructor() {
    this._items = new Map();
  }

  // add an item to the basket check if quanitity is greater than zero check if
  // product already exists, if so update it's quantity if doesn't exist then add
  // it to the Basket Map
  add(name, quantity = 1) {
    if (quantity > 0) {
      if (this._items.has(name)) {
        this
          ._items
          .get(name)
          .quantity += quantity; //increment an existing item by the quantity
      } else {
        this
          ._items
          .set(name, new BasketItem(name, quantity)); //add the item if it does not exist
      }
    }

  }

  // update quantity of a product, if it's zero or smaller then delete the basket
  // item
  update(name, quantity) {
    if (quantity <= 0) {
      this
        ._items
        .delete(name);
    } else if (this._items.has(name)) {
      this
        ._items
        .get(name)
        .quantity = quantity;
    } else {
      throw new Error(`Product does not exist in Basket, product key: ${name}`);
    }
  }

  //remove a product from the basket
  remove(name) {
    if (!this._items.has(name)) {
      throw new Error(`Product does not exist in Basket, product key: ${name}`);
    }
    this
      ._items
      .delete(name);
  }

  clear() {
    this
      ._items
      .clear();
  }

  //find the basket item using the product name
  find(name) {
    return this
      ._items
      .get(name);
  }

  //find the basket item using the product name
  has(name) {
    return this
      ._items
      .has(name);
  }

  // return an array of the basket items (convert the Mqp into an array, useful
  // for JSX map function , for example: array.map(<JSX output />))
  toArray() {
    return [
      ...this
        ._items
        .values()
    ];
  }

  get total() {
    return [
      ...this
        ._items
        .values()
      ]
      .map(item => item.discountedTotal)
      .reduce((sum, value) => sum + value, 0);
  }

  get uniqueCount() {
    return [
      ...this
        ._items
        .values()
      ]
      .map(item => item.quantity)
      .reduce((sum, value) => sum + value, 0);
  }

  // return number of unique items in basket
  get length() {
    return this._items.size;
  }

  log() {
    let result = `
---------------------------------------------------------------------
--------------------Shopping basket receipt--------------------------
---------------------------------------------------------------------

    You bought ${this.uniqueCount} product${this.uniqueCount
      ? 's'
      : ''}

 `;
    const sortedBasket = this
      .toArray()
      .sort(row => row.name);

    result += sortedBasket.map(row => `\t\t${row.name} ${row.hasVolumneDiscounted
      ? '*'
      : ' '} \t\t ${row.price.toFixed(2)} * ${row.quantity} \t\t\t${row.hasVolumneDiscounted
        ? '\t(was ' + row.itemTotal.toFixed(2) + ')\t'
        : '               \t'}=\t ${row.discountedTotal.toFixed(2)} ${row.hasVolumneDiscounted
          ? '\n\t\t' + row.recommendVolumneNotice
          : ''}

 `).join('');

    result += `
                                                        --------------
                                                          Total: ${this
      .total
      .toFixed(2)}
---------------------------------------------------------==============`;
    return result;
  }
}

// fix for low level JS: toFixed returns a string.  We need a number so we can
// add the currency totals
Number.prototype.toFixedNumber = function (x, base = 10) {
  var pow = Math.pow(base, x);
  return + (Math.round(this * pow) / pow);
}

/* Manual testing
let basket = new Basket();

basket.add('Apple', 1);
basket.add('Apple', 1);
basket.add('Apple', 1);
console.log(basket.find('Apple').discountedTotal);
console.log(basket.find('Apple').discountNotice);

basket.add('Orange', 3);
basket.update('Orange', 4);
console.log(basket.find('Orange').discountedTotal);

basket.add('Orange', 3);
console.log(basket.find('Orange').discountedTotal);

basket.add('Orange', 3);
basket.update('Orange', 4);
console.log(basket.find('Orange').discountedTotal);

basket.add('Orange', 3);
basket.remove('Orange');
//console.log(basket.find('Orange').discountedTotal);

basket.add('Papaya', 6);
console.log(basket.find('Papaya').price);
console.log(basket.find('Papaya').discountedTotal);
console.log(basket.find('Papaya').discountNotice);

basket.add('Orange', 6);
basket.add('Orange', 6);
basket.add('Orange', 6);

basket.add('Banana', 4);
basket.add('Papaya', 4);
console.log(basket.log());

*/