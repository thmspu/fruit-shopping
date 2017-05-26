import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';
import BasketItemContainer from '../containers/BasketItemContainer';

const BasketTable = ({
  basket = [],
  paymentTotal = 0.0,
  uniqueCount = 0
}) => {
  return basket.length === 0
    ? <span>Choose products to add to basket.</span>
    : <Table responsive>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>{uniqueCount}</th >
        </tr>
      </thead>
      <tbody>
        {basket.map(item => <BasketItemContainer key={'basket-' + item.name} {...item}/>)}
        <tr>
          <th></th>
          <th></th>
          <th>Total
          </th>
          <th>$ {(paymentTotal).toFixed(2)}</th>
          <th></th>
        </tr>
      </tbody>
    </Table>

}

BasketTable.propTypes = {
  basket: PropTypes.array.isRequired
}

export default BasketTable
