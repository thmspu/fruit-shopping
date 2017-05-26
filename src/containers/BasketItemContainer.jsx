import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {removeProduct, discountedTotal, productLookup} from '../reducers'
import BasketItemView from '../components/BasketItem'

class BasketItemContainer extends Component {

  render() {
    return <BasketItemView {...this.props}/>
  }
}

BasketItemContainer.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

// map state to props and add extra props useing reducer selectors
const mapStateToProps = (state, {name, quantity}) => {
  //console.log(state,name)
  const product = productLookup(state, name);
  return {
    price: product.price,
    offer: !!product.discount
      ? product.discount.volume.notice
      : '',
    rowTotal: discountedTotal(quantity, product),
    stockLevel: product.inventory
  }
}

export default connect(mapStateToProps, {removeProduct, discountedTotal})(BasketItemContainer)