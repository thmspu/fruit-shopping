import {combineReducers} from 'redux';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const reducers = combineReducers({
    product: productReducer,
    cart: cartReducer
});

export default reducers;