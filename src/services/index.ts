import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeBaseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.2.80:8080/v1/' }),
    endpoints: () => ({}),
  });
  
  const apiWithTag = employeeBaseApi.enhanceEndpoints({addTagTypes: ['Employee']});
  
  export default apiWithTag;
