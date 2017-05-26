import {createStore, applyMiddleware} from 'redux';
import reducers from './reducer';
import thunk from 'redux-thunk';
import axios from 'axios';

const Store = createStore(reducers, applyMiddleware(thunk));

Store.dispatch(dispatch => {
    dispatch({
        type: 'FETCH_PRODUCTS_START'
    });
    axios.get('./products')
    //change the address " get json data" 
        .then(resp => {
            dispatch({
                type: 'INIT_PRODUCTS',
                payload: resp.data
            });
        })
        .catch(error => {
            dispatch({
                type: 'FETCH_PRODUCTS_FAILED',
                payload: resp.error
            });
        });
});

export default Store;

