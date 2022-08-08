import apiWithTag from 'services';

import { DepartmentDetailsApi, UpdateEmployeeReq, RoleDetailsApi } from 'components/types';
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
    getEmployeeList: builder.query<EmployeeListApiResponse[], string>({
      query: (searchedElement: string) => ({
        url: `/employee?search=${searchedElement}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      providesTags: ['Employee']
    }),
    getEmployeeDetails: builder.query<EmployeeDetailsApi, string>({
      query: (id) => `/employee/${id}`,
    }),
    updateEmployee: builder.mutation<any, UpdateEmployeeReq>({
      query: ({ body, id }) => ({
        url: `/employee/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Employee'],
    }),
    updateStatus: builder.mutation({
      query: ({ body, id }) => ({
        url: `/employee/${id}`,
        method: 'PATCH',
        body: body,
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
    addFile: builder.mutation({
      query: (payload) => ({
        url: `/employee/id-proof/${payload.id}`,
        method: 'PATCH',
        body: payload.body,
      }),
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),
    addLogin: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Employee'],
    }),
    addSignUp: builder.mutation({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Employee'],
    }),
    getLogout: builder.query<string, void>({
      query: () => '/logout',
      providesTags: ['Employee']
    }),
    addDepartment: builder.mutation({
      query: (body) => ({
        url: '/department',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Employee'],
    }),

  }),
});

export const {
  useGetRoleListQuery,
  useGetDepartmentListQuery,
  useGetEmployeeListQuery,
  useLazyGetEmployeeDetailsQuery,
  useUpdateEmployeeMutation,
  useUpdateStatusMutation,
  useAddEmployeeMutation,
  useAddFileMutation,
  useDeleteEmployeeMutation,
  useAddLoginMutation,
  useAddSignUpMutation,
  useLazyGetLogoutQuery,
  useAddDepartmentMutation,
} = employeeApi;
