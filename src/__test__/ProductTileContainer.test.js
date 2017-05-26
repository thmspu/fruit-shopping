import React from 'react';
import {connect} from 'react-redux';
import {shallowWithState} from 'enzyme-redux';
import ProductTileContainer from '../containers/ProductTileContainer';

describe('ProductTileContainer With State', () => {

  const ReactComponent = () => (<ProductTileContainer key='1' name="Apple" price={0.5}/>);
  it('works', () => {
    const expectedState = 'expectedState';
    const mapStateToProps = (state) => ({state});
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
    const component = shallowWithState(
      <ConnectedComponent/>, expectedState);
    expect(component.props().state).toBe(expectedState);
  });

});