import configureStore from '../store';

describe('configure a store with a state', () => {
  const store = configureStore();
  
  it('contains the search state', () => {
    expect(store.getState().search).toBeTruthy();
  });

  it('contains the result state', () => {
    expect(store.getState().result).toBeTruthy();
  });

});
