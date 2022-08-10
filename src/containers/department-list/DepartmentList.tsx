import React, { FC, useState } from 'react';

import { useLazyGetDepartmentDetailsQuery, useGetDepartmentListQuery, useUpdateDepartmentMutation } from 'services/api';
import DepartmentListComponent from 'components/DepartmentListComponent';
import MainBar from 'components/MainBar';
import PopUp from 'components/PopUp';
import Loader from 'components/Loader';
import DepartmentDetailsModal from 'components/DepartmentDetailsModal';
import UpdateDepartmentComponentModal from 'components/UpdateDepartmentModal';


const DepartmentList: FC = () => {

    const [updateDepartment] = useUpdateDepartmentMutation();
    const { data: departmentListData, error, isLoading } = useGetDepartmentListQuery();
    const [getDepartmentDetails, { data: departmentDetailsData, }] = useLazyGetDepartmentDetailsQuery();
    const [clickedDepartmentId, setClickedDepartmentId] = useState(1);
    const [openDeptDetailsModal, setOpenDeptDetailsModal] = useState(false);
    const [updateDeptModal, setUpdateDeptModal] = useState(false);
    const [selectedEditDepartment, setSelectedEditDepartment] = useState(0);

    return (
        <div>
            {error ? (<PopUp description={'Cannot load Department List'}
                popUpStyle={'mt-20 fixed inset-10 h-16 w-[15%] min-w-[450px] border-rose-600 bg-red-50'}
                />) :
                (<div> {isLoading ? (<Loader />) : (
                    <div>
                        <MainBar description='Department List'
                            buttonRequired={true}
                            buttonDescription="Create Department"
                            buttonIcon="fa fa-plus"
                            buttonNavigateUrl="/department-list"
                            popUpRequired={true}
                            mainbarElementsRequired={false} />

                        <div className="w-[calc(100vw-350px)]  overflow-auto p-5">
                            <table className="mx-auto w-full min-w-[870px] table-auto">
                                <thead>
                                    <tr className=" mt-8 ml-14 flex  h-16 w-[90%] min-w-[650px] gap-10
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
                                            setOpenDeptDetailsModal={setOpenDeptDetailsModal}
                                            setUpdateDeptModal={setUpdateDeptModal}
                                            setSelectedEditDepartment={setSelectedEditDepartment}
                                        />
                                    </tbody>))}
                            </table>
                        </div>
                        {openDeptDetailsModal &&
                            <DepartmentDetailsModal departmentDetailsData={departmentDetailsData}
                                setOpenDeptDetailsModal={setOpenDeptDetailsModal}
                                clickedDepartmentId={clickedDepartmentId}
                                getDepartmentDetails={getDepartmentDetails}
                            />}
                        {updateDeptModal &&
                            <UpdateDepartmentComponentModal setUpdateDeptModal={setUpdateDeptModal}
                                updateDepartment={updateDepartment} getDepartmentDetails={getDepartmentDetails}
                                departmentDetailsData={departmentDetailsData}
                                selectedEditDepartment={selectedEditDepartment} />}
                    </div>
                )}
                </div>)}
        </div>
    );
};

export default DepartmentList;