import React, { FC } from 'react';

import { useGetDepartmentListQuery } from 'services/api';
import DepartmentListComponent from 'components/DepartmentListComponent';
import MainBar from 'components/MainBar';
import PopUp from 'components/PopUp';

const DepartmentList: FC = () => {

    const { data, error, isLoading } = useGetDepartmentListQuery();

    return (
        <div>
            {error ? (<PopUp description={'Cannot load Department List'}
                margin={'mt-20 fixed inset-10 h-16 w-[15%] min-w-[450px] border-rose-600 bg-red-50'} />) :
                (<div> {isLoading ? (<div>Loading</div>) : (
                    <div>
                        <MainBar description='Department List'
                            buttonRequired={true}
                            buttonDescription="Create Department"
                            buttonIcon="fa fa-plus"
                            buttonNavigateUrl="/create-department" />
                        <div className="w-[calc(100vw-350px)]  overflow-x-auto p-5">
                                {data?.map((dept) => (
                                    <DepartmentListComponent key= {dept.id} department={dept} />))}
                        </div>
                    </div>
                )}
                </div>)}
        </div>
    );
};

export default DepartmentList;