import apiWithTag from 'services';

import { DepartmentDetailsApi, RoleDetailsApi } from 'components/types';
import { EmployeeListApiResponse } from 'components/types';
import { EmployeeDetailsApi } from 'components/types';

const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query<DepartmentDetailsApi[], void>({
      query: () => '/department',
      providesTags: ['Employee']
    }),
    getRoleList: builder.query<RoleDetailsApi[], void>({
      query: () => '/role',
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
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Employee'],
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
  useGetRoleListQuery,
  useGetDepartmentListQuery,
  useGetEmployeeListQuery,
  useLazyGetEmployeeDetailsQuery,
  useUpdateEmployeeMutation,
  useAddEmployeeMutation,
  useDeleteEmployeeMutation
} = employeeApi;
