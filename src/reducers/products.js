import shop from '../model/shopAPI'

//constants
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

//reducer
const products = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

//action creators and helpers
export const receiveProducts = products => ({type: RECEIVE_PRODUCTS, products})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const getProduct = (name) => (dispatch, getState) => {
  const {products} = getState()
  return products.find(item => item.name === name);

}

export default products;