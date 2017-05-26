import React, {Component} from 'react';
import './product.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from '../store';

class Product extends Component{
    constructor(props){
        super(props);
        this._add_to_cart = this._add_to_cart.bind(this);
    }

    _add_to_cart(){
        const {name, price, imgsrc} = this.props;
        Store.dispatch({
            type: 'ADD_TO_CART',
            //transfer data
            payload: {
                name: name,
                price: parseFloat(price),
                imgsrc: imgsrc,
                quantity: 1
            }
        })
    }

    render(){
        let {name, price, imgsrc, quantity} = this.props;

        return (
            <div className="fruit-card col-lg-3 col-md-3 col-sm-4 col-xs-6">
                <div>
                    <img src={imgsrc}/>
                    <p>{name}</p>
                    <h4><span className="price">{`$${price}  `}</span><span className="stock">{`${quantity} In Stock`}</span></h4>
                    <button className="btn btn_add_cart" onClick={this._add_to_cart}>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Product;