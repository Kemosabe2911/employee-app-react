import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// import { EMPLOYEE_DETAIL_ITEM as employees } from 'constants/employeeDetailItem';
import { columns } from 'constants/ListHeader';
import DeleteModal from './DeleteModal';
import { DeleteIcon, EditIcon } from 'assets/icons/images';
// import { ListComponentProps } from './types';
import { useGetEmployeeListQuery,useDeleteEmployeeMutation} from 'services/api';

const ListComponent: FC = () => {
    const { data } = useGetEmployeeListQuery();
    const [deleteEmployee]=useDeleteEmployeeMutation();
    // const { setId } = props;
    
    const navigate = useNavigate();
    

    const handleDelete = (clickedId) => {
        deleteEmployee(clickedId);
    };
    const handleEdit = () => {
        navigate('/update-employee');
        // setId(clickedId);
    };
    return (
        <>
            <table className='mx-auto mt-10 w-[96%] table-auto align-middle md:table-fixed'>
                <thead>
                    <tr className=" h-[60px] rounded-xl bg-aliceBlue shadow-xl" >
                        {columns.map(column => {
                            return (
                                <th className='w-[200px] p-4 text-center text-base 
                                font-normal' key={column}> {column}</th>
                            );
                        })}
                    </tr>
                </thead>


                {data?.map(employee => {
                    return (
                        // <div  className=''>
                        <tbody key={employee.Id} className='m-10'>
                            <tr className=" m-4 h-4 rounded-xl bg-white"></tr>
                            <tr className=" m-4 h-14 rounded-xl bg-white shadow-md" >
                                <td className='m-2 ml-4 p-4 text-center'>   {employee.name}</td>
                                <td className='p-4 text-center'>   {employee.Username}</td>
                                <td className='p-4 text-center'>   {employee.age}</td>
                                <td className='p-4 text-center'>   {employee.role_id}</td>
                                <td className=' px-10 text-right lg:px-4 lg:text-left xl:px-7 2xl:px-12'>
                                    <div className={` h-8 w-28  rounded-2xl p-1 text-center
                        ${(!employee.isActive) ? 'bg-teaGreen' : 'bg-paleRose'}
                         text-left md:w-28 lg:w-16 2xl:w-28`}>
                                        {!employee.isActive ? 'Active' : 'Inactive'}
                                    </div> </td>
                                <td className='p-4 text-center' >   {employee.department_id}</td>
                                <td className='p-4 text-center'><button onClick={()=>handleDelete(employee.Id)}>
                                    <DeleteIcon />
                                </button>
                                    <DeleteModal />
                                    <button className="pl-5" onClick={() => handleEdit()}>
                                        <EditIcon />
                                    </button></td>
                            </tr>
                        </tbody>

                        // </div>


                    );
                })}

            </table>
            {/* <div >
                   
                </div>
                <div className="w-2/12 flex-initial  pt-3 ">
                   
                </div>
                <div className="w-1/12 flex-initial  pt-3">
                   
                </div>
                <div className="w-2/12 flex-initial  pt-3">
                    Role
                </div>
                <div className="w-2/12 flex-initial pt-3">
                    Status
                </div>
                <div className="w-1/12  flex-initial pt-3">
                    Department ID
                </div>
                <div className="w-2/12  flex-initial pl-10 pt-3">
                    Action
                </div> */}


            {/* // <div className="w-2/12 flex-initial pl-5 pt-3  text-gray-600">
                        //     {employee.name}
                        // </div>
                        // <div className="w-2/12 flex-initial pt-3 pl-4  text-gray-600">
                        //     {employee.userName}
                        // </div>
                        // <div className="w-1/12 flex-initial pt-3 pl-2 text-gray-600">
                        //     {employee.age}
                        // </div>
                        // <div className="w-2/12 flex-initial pt-3  text-gray-600">
                        //     {employee.role}
                        // </div>
                        // <div className={`h-[40px] w-[111px] flex-initial rounded-xl p-2 pl-[12px]
                        // ${(employee.status) === 'Active' ? 'bg-teaGreen' : 'bg-paleRose'}
                         text-center text-gray-600`}>
                        //     {employee.status}
                        // </div>
                        // <div className="w-1/12  flex-initial pt-3 pl-8 text-gray-600">
                        //     {employee.departmentId}
                        // </div> */}
            {/* <div className="w-2/12  flex-initial pt-3 pl-8 text-gray-600" > */}
            {/* <button onClick={handleDelete}>
                                {/* <span className={`h-[15px] w-[15px] pr-[30px]  ${deleted}`} /> */}
            {/* <DeleteIcon /> */}
            {/* </button> */}
            {/* <DeleteModal />
                            <button className="pl-5" onClick={() => handleEdit(employee.id)}>
                                {/* <span className={`h-[15px] w-[15px] pr-[30px] ${edit}`} /> */}
            {/* <EditIcon /> */}
            {/* </button> */}
            {/* </div> */}
            {/* <tr className="rounded-xl  ">
                       
                        <th>
                            Employee Name
                        </th>
                        <th>
                            User Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Role
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Department ID
                        </th>
                        <th>
                            Actions
                        </th> */}
        </>

    );

};
export default ListComponent;