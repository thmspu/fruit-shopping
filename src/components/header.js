import React, {Component} from 'react';
import './header.less';

class Header extends Component{
    render(){
        return(
            <nav className="fruit-nav">
                <div className="nav-cate">
                    Fruit
                </div>
            </nav>
        )
    }
}

export default Header;