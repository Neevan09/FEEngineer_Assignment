import { createSelector } from 'reselect';

const selectAsyncCallStatus = (state) => state.get('asyncCallStatus') || {};
export const selectState = (state) => state;

export const getUserDetails = createSelector(selectState, (state) => {
    const userInfo = state.get('UserInfo');
    const user = {
      user: userInfo,
    };
    return user;
  });
  

  export const getCompanyDetails = createSelector(selectState, (state) => {
    const companyInfo = state.get('CompanyInfo');
    const company = {
      company: companyInfo,
    };
    return company;
  });

  export const routerDetails = createSelector(selectState, (state) => {
    const router = state.get('router');
    // TODO SOE Mapping when Data points are available from the redux state.
    const routerData = {
      router: router,
    };
    return routerData;
  });
  