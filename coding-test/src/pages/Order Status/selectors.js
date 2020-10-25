import { createSelector } from 'reselect';

const selectAsyncCallStatus = (state) => state.get('asyncCallStatus') || {};
export const selectState = (state) => state;

export const getOrderDetails = createSelector(selectState, (state) => {
    const originalOrder = state.get('Home');
    const order = {
      home: originalOrder,
    };
    return order;
  });
  

  export const routerDetails = createSelector(selectState, (state) => {
    const router = state.get('router');
    // TODO SOE Mapping when Data points are available from the redux state.
    const routerData = {
      router: router,
    };
    return routerData;
  });
  