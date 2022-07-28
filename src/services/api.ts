import apiWithTag from 'services';

import { DepartmentDetailsApi, RoleDetailsApi } from 'components/types';
import { EmployeeListApiResponse } from 'components/types';

const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query<DepartmentDetailsApi[], void>({
      query: () => '/department',
      providesTags: ['Employee']
    }),
    getRoleList: builder.query<RoleDetailsApi[],void>({
      query: () => '/role',
      providesTags: ['Employee']
    }),
    getEmployeeList: builder.query<EmployeeListApiResponse[], void>({
      query: () => '/employee',
      providesTags: ['Employee']
    }),
    addEmployee: builder.mutation({
      query: (body) => ({
        url: '/employee',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Employee'],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    })

  }),
});

export const {
  useGetDepartmentListQuery,
  useGetRoleListQuery,
  useGetEmployeeListQuery,
  useAddEmployeeMutation,
  useDeleteEmployeeMutation
} = employeeApi;
