import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  PageHeader,
  Button,
  Grid,
  Col,
  Row,
  Modal
} from 'react-bootstrap'
import {calculateBasketTotal, uniqueCount, clearProducts} from '../reducers'
import ProductTileContainer from '../containers/ProductTileContainer'
import BasketTable from '../components/BasketTable'

class BasketContainer extends Component {

  constructor(props) {
    super(props)

    this.open = this
      .open
      .bind(this);
    this.close = this
      .close
      .bind(this);
  }

  state = {
    showModal: false
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    window.print();
    this.setState({showModal: false});
    this
      .props
      .clearProducts();
  }

  render() {
    const {basket, products, paymentTotal, uniqueCount} = this.props;
    return (
      <div>
        <div className="no-print">
          <PageHeader>Fruit Shopping &nbsp;
            <small>
              We deliver to your desk daily!</small>
          </PageHeader>
          <Grid>
            <Row >
              <Col xs={12} md={8}>
                <h4>Choose Products</h4>
                {products.map(item => <ProductTileContainer key={'product-' + item.name} {...item}/>)}
              </Col>
              <Col xs={12} md={4}>
                <h4>Basket</h4>
                <Button
                  bsStyle="success"
                  bsSize="large"
                  block
                  onClick={() => this.open()}
                  disabled={!basket.length}>Checkout</Button>
                <br/>
                <BasketTable
                  basket={basket}
                  paymentTotal={paymentTotal}
                  uniqueCount={uniqueCount}/>
              </Col>

            </Row>
          </Grid>
        </div>
        <Modal show={this.state.showModal} onHide={() => this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Completed Purchase &nbsp;<small>{new Date().toLocaleString('en-GB')}</small>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Thank you for visiting Fresh Fruit</h4>
            <p>We'll delivery your basket by 9am tomorrow morning.</p>
            <BasketTable
              basket={basket}
              paymentTotal={paymentTotal}
              uniqueCount={uniqueCount}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.close()} className="no-print">Print</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// map state to props and add extra props useing reducer selectors
function mapStateToProps(state) {
  return {
    products: state.products,
    basket: state.basket,
    uniqueCount: uniqueCount(state.basket) || 0,
    paymentTotal: calculateBasketTotal(state) || 0.0
  };
}

export default connect(mapStateToProps, {calculateBasketTotal, uniqueCount, clearProducts})(BasketContainer);