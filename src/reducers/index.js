/* eslint-disable */
import {combineReducers} from 'redux'
import basket, * as fromBaskets from './basket'
import products, * as fromProducts from './products'

export default combineReducers({products, basket})

//helpers
export const getAllProducts = state => fromProducts.getAllProducts();

//Basket API
export const addProduct = fromBaskets.addProduct;
export const removeProduct = fromBaskets.removeProduct;
export const decrementProduct = fromBaskets.decrementProduct;
export const clearProducts = fromBaskets.clearProducts;
//Discounting API
export const discountedTotal = fromBaskets.discountedTotal;
export const calculateBasketTotal = fromBaskets.calculateBasketTotal;
export const uniqueCount = fromBaskets.uniqueCount;

//In basket need to lookup Product details
export const productLookup = (state, name) => state
  .products
  .find(x => x.name === name);

// fix for low level JS: toFixed returns a string.  We need a number so we can
// add the currency totals
Number.prototype.toFixedNumber = function (x, base = 10) {
  var pow = Math.pow(base, x);
  return + (Math.round(this * pow) / pow);
}