import apiWithTag from 'services';

import { DepartmentDetailsApi } from 'components/types';
import { EmployeeListApiResponse } from 'components/types';
import { EmployeeDetailsApi } from 'components/types';

const employeeApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getDepartmentList: builder.query<DepartmentDetailsApi[], void>({
            query: () => '/department',
            providesTags: ['Employee']
        }),
        getEmployeeList: builder.query<EmployeeListApiResponse[], void>({
            query: () => '/employee',
            providesTags: ['Employee']
        }),
        getEmployeeDetails: builder.query<EmployeeDetailsApi, string>({
            query: (id) => `/employee/${id}`,
        }),
        updateEmployee: builder.mutation({
            query: ({ id, ...patch }) => ({
              url: `/employees/${id}`,
              method: 'PUT',
              body: patch,
            }),
            invalidatesTags: ['Employee'],
          }),
    }),
});

export const {
    useGetDepartmentListQuery, 
    useGetEmployeeListQuery,
    useLazyGetEmployeeDetailsQuery,
    useUpdateEmployeeMutation
} = employeeApi;
