import React, { Component } from "react";
import ReactDOM from "react-dom";
import Store from './store';
import Header from './components/header';
import Product from './components/product';
import CartItem from './components/cartItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less';

class App extends Component{
    constructor(props){
        super(props);
    }

    _empty_cart(){
        Store.dispatch({
            type: 'EMPTY_CART'
        })
    }

    render(){

        const {product, cart} = Store.getState();
        console.log(Store.getState())

        return (
            <div>
                <Header/>
                <div className="fruit-container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                {product.products.map((item, index)=> (
                                    <Product name={item.itemName} price={item.price} imgsrc={item.imgSrc} quantity={item.quantityRemaining} key={index}/>
                                ))}
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 checkout">
                            <h4>Shopping Cart</h4>
                            <span>2 items</span>
                            <div className="cart-container">
                                {cart.products.map((item, index) => (
                                    <CartItem name={item.name} price={item.price} quantity={item.quantity} imgsrc={item.imgsrc} key={index}/>
                                ))}
                            </div>
                            <div className="checkout-container">
                                <span style={{display: "block"}}>{`Total: $${cart.total}`}</span>
                                <p onClick={this._empty_cart}>Empty Cart</p>
                                <button className="btn-confirm">Confirm Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const app = document.getElementById('root');
const renderDOM = () => {
    ReactDOM.render( <App/>, app);
};

renderDOM();
Store.subscribe(renderDOM);