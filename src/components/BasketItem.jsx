import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

const BasketItem = ({
  name,
  quantity,
  price,
  offer,
  rowTotal,
  removeProduct
}) => (

  <tr>
    <td>{name}
      <span className="basket-item-offer">
        {offer
          ? '*'
          : ''}
      </span>
    </td>
    <td>$ {price.toFixed(2)}</td>
    <td style={{
      textAlign: "center"
    }}>{quantity}</td>
    <td>$ {rowTotal.toFixed(2)}</td>
    <td>
      <Button
        bsStyle="danger"
        onClick={() => removeProduct(name)}
        className="no-print">X</Button>
    </td>
  </tr>
);

BasketItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  offer: PropTypes.string.isRequired,
  rowTotal: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired
}

export default BasketItem;