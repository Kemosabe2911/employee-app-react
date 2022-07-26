import apiWithTag from 'services';
import { EmployeeListApiResponse } from 'components/types';

const employeeApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query<EmployeeListApiResponse[], void>({
          query: () => '/employee',
          providesTags: ['Employee']
        }),
    }),
});

export const{
    useGetEmployeeListQuery} =employeeApi;