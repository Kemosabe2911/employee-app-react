import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeBaseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/v1/', credentials:'include' }),
    endpoints: () => ({}),
    tagTypes: ['Employee']
  });
  export default employeeBaseApi;
