import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {addProduct, decrementProduct} from '../reducers'
import ProductTileView from '../components/ProductTile'

class ProductTileContainer extends Component {

  render() {
    return <ProductTileView {...this.props}/>
  }
}

ProductTileContainer.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
// map state to props and add extra props useing reducer selectors
const mapStateToProps = (state, {name}) => {
  return {
    ...state.products,
    inBasket: !state
      .basket
      .find(x => x.name === name)
  }
}

export default connect(mapStateToProps, {addProduct, decrementProduct})(ProductTileContainer)