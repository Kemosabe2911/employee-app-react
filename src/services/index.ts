import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeBaseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://da29-14-142-179-226.in.ngrok.io/v1/', credentials:'include' }),
    endpoints: () => ({}),
    tagTypes: ['Employee']
  });
  export default employeeBaseApi;
