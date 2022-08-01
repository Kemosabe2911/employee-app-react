import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import employeeBaseApi from '../services';
import authenticationReducer from './reducers';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    [employeeBaseApi.reducerPath]: employeeBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(employeeBaseApi.middleware)
});
setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch