import {createMockDispatch} from 'redux-test-utils';

describe('example', () => {
  it('works', () => {
    const state = 'state';
    const dispatchMock = createMockDispatch();
    const action = {
      type: 'type',
      data: 'data'
    };
    dispatchMock.dispatch(action);

    expect(dispatchMock.getAction(action.type)).toEqual(action);
    expect(dispatchMock.getActions()).toEqual([action]);
    expect(dispatchMock.isActionDispatched(action)).toBe(true);
    expect(dispatchMock.isActionTypeDispatched(action.type)).toBe(true);
  });
});