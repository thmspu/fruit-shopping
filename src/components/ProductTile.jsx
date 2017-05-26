import React, {PropTypes} from 'react';
import {Button, Col, Thumbnail} from 'react-bootstrap';

const ProductTile = ({
  name,
  price,
  inventory,
  imageUrl,
  inBasket,
  addProduct,
  decrementProduct
}) => (
  <Col xs={12} md={6} lg={3}>
    <Thumbnail src={imageUrl} alt={name} className="product-tile-thumb">
      <h3>{name}</h3>
      <p>$ {price.toFixed(2)}</p>
      <p>{inventory <= 0
          ? 'OUT OF STOCK'
          : ''}</p>
      <p>
        <Button
          bsStyle="primary"
          bsSize="large"
          className="product-tile-button"
          onClick={() => addProduct(name)}
          disabled={inventory <= 0}>
          +
        </Button>
        <Button
          bsStyle="info"
          bsSize="large"
          className="product-tile-button"
          onClick={() => decrementProduct(name)}
          disabled={!!inBasket}>
          -
        </Button>
      </p>
    </Thumbnail>
  </Col>
)

ProductTile.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number,
  imageUrl: PropTypes.string,
  inBasket: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired,
  decrementProduct: PropTypes.func.isRequired
}

export default ProductTile;
