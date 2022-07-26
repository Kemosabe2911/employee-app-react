import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { useDispatch } from 'react-redux';
// import { pokemonApi } from 'services/pokemon';

// import rootReducer from './reducers';
import  employeeBaseApi  from '../services';

 const store = configureStore({
  reducer: {
    [employeeBaseApi.reducerPath]: employeeBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeBaseApi.middleware),
});

setupListeners(store.dispatch);

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
