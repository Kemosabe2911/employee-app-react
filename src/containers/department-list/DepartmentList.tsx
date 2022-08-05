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
                popUpStyle={'mt-20 fixed inset-10 h-16 w-[15%] min-w-[450px] border-rose-600 bg-red-50'} />) :
                (<div> {isLoading ? (<div>Loading</div>) : (
                    <div>
                        <MainBar description='Department List'
                            buttonRequired={true}
                            buttonDescription="Create Department"
                            buttonIcon="fa fa-plus"
                            buttonNavigateUrl="/department-list"
                            popUpRequired={true} />

                        <div className="w-[calc(100vw-350px)]  overflow-x-auto p-5">
                            <table className="mx-auto w-full min-w-[550px] table-auto">
                                <thead>
                                    <tr className=" mt-8 ml-14 flex  h-16 w-[90%] min-w-[550px] gap-10
                 bg-aliceBlue p-5  text-center shadow-xl">
                                        <th className="w-1/5 font-normal">Department Id</th>
                                        <th className="w-1/5 font-normal">Department Name</th>
                                        <th className="w-1/5 font-normal">Website</th>
                                        <th className="w-1/5 font-normal">Location</th>
                                        <th className="w-1/5 font-normal">Actions</th>
                                    </tr>
                                </thead>
                                {data?.map((dept) => (
                                    <tbody key={dept.id}>
                                        <DepartmentListComponent department={dept} />
                                    </tbody>))}
                            </table>
                        </div>
                    </div>
                )}
                </div>)}
        </div>
    );
};

export default DepartmentList;