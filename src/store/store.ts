import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import employeeBaseApi from '../services';

const store = configureStore({
  reducer: {
    [employeeBaseApi.reducerPath]: employeeBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(employeeBaseApi.middleware)
});
setupListeners(store.dispatch);
export default store;
