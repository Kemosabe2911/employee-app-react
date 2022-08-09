import React, { FC, useEffect, useState } from 'react';

import { useLazyGetDepartmentDetailsQuery, useGetDepartmentListQuery } from 'services/api';
import DepartmentListComponent from 'components/DepartmentListComponent';
import MainBar from 'components/MainBar';
import PopUp from 'components/PopUp';
import DepartmentDetailsModal from 'components/DepartmentDetailsModal';

const DepartmentList: FC = () => {

    const { data: departmentListData, error, isLoading } = useGetDepartmentListQuery();
    const [getDepartmentDetails, { data: departmentDetailsData, }] = useLazyGetDepartmentDetailsQuery();
    const [clickedDepartmentId, setClickedDepartmentId] = useState(1);
    const [openDeptDetailsModal,setOpenDeptDetailsModal] = useState(false);

    useEffect(() => {
        getDepartmentDetails(clickedDepartmentId);
    }, [clickedDepartmentId]);

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
                            popUpRequired={true}
                            mainbarElementsRequired={false} />

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
                                {departmentListData?.map((dept) => (
                                    <tbody key={dept.id}>
                                        <DepartmentListComponent 
                                            department={dept}
                                            setClickedDepartmentId={setClickedDepartmentId} 
                                            setOpenDeptDetailsModal={setOpenDeptDetailsModal}/>
                                    </tbody>))}
                            </table>
                        </div>
                        {openDeptDetailsModal &&
                            <DepartmentDetailsModal departmentDetailsData={departmentDetailsData}
                                setOpenDeptDetailsModal={setOpenDeptDetailsModal} />}
                    </div>
                )}
                </div>)}
        </div>
    );
};

export default DepartmentList;