import React, {Component} from 'react';
import Store from '../store';
import './cartItem.less';

class CartItem extends Component{
    constructor(props){
        super(props);
        this._increment_btn = this._increment_btn.bind(this);
        this._delete = this._delete.bind(this);
        this._decrement_btn = this._decrement_btn.bind(this);
    }

    _increment_btn(){
        const {name, price} = this.props;
        Store.dispatch({
            type: 'INCREMENT',
            payload: {

                // name: elem.getAttribute('data-name'),
                // price: parseFloat(elem.getAttribute('data-price')),
                // imgSrc: elem.getAttribute('data-imgSrc'),
                // quantity: 1

                name: name,
                price: price

            }
        })
    }

    _decrement_btn(){
        console.log('receive')
        const{ name, price } = this.props;
        Store.dispatch({
            type:'DECREMENT',
            payload: {
                name: name,
                price: parseFloat(price)
            }
        })
    }

    _delete(){
        Store.dispatch({
            type: 'DELETE_FROM_CART',
            payload: {
                name: this.props.name
            }
        })
    }

    render(){


        let {imgsrc, price, quantity} = this.props;

 
        return (
            <div className="cart-item">
                <div>
                    <img src={imgsrc}/>
                    <button className="decrement_btn" onClick={this._decrement_btn}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="increment_btn" onClick={this._increment_btn}>+</button>
                </div>
                <div>
                    <span>{`@ $${price}each = $${(price*quantity).toFixed(2)}`}</span>
                    <span title="delete" className="pull-right text-delete" onClick={this._delete}>Delete</span>
                </div>
            </div>
        )
    }
}

export default CartItem;
