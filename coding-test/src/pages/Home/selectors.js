import { createSelector } from 'reselect';

export const getOrderDetails = createSelector(selectState, (state) => {
    const originalOrder = state.get('originalOrder');
    const order = {
      originalOrder: originalOrder,
    };
    return order;
  });
  