import React from 'react';
import {connect} from 'react-redux';
import {shallowWithStore} from 'enzyme-redux';
import {createMockStore} from 'redux-test-utils';
import BasketContainer from '../containers/BasketContainer';

const storeValues1 = {
  products: [],
  basket: []
}

describe('BasketContainer shallowWithStore', () => {
  const ReactComponent = () => (<BasketContainer/>);
  describe('Test Basket Container with store', () => {
    it(', store has default values', () => {
      const expectedState = storeValues1;
      const mapStateToProps = (state) => ({state});
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(
        <ConnectedComponent/>, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });
  });

  describe('dispatcher is working', () => {
    it('works', () => {
      const action = {
        type: 'type'
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        }
      });
      const store = createMockStore();

      const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
      const component = shallowWithStore(
        <ConnectedComponent/>, store);
      component
        .props()
        .dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);
    });
  });
});