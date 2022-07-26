import apiWithTag from 'services';
import { DepartmentDetailsApi } from 'components/types';

const employeeApi =apiWithTag.injectEndpoints({
    endpoints: (builder) =>({
        getDepartmentList: builder.query<DepartmentDetailsApi[],void>({
            query: () => '/department',
            providesTags: ['Employee']
        })
    })
});

export const {
    useGetDepartmentListQuery
}=employeeApi;