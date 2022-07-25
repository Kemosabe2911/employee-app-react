import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EMPLOYEE_DETAIL_ITEM as employees } from 'constants/employeeDetailItem';
import { columns } from 'constants/ListHeader';
import DeleteModal from './DeleteModal';
import { DeleteIcon, EditIcon } from 'assets/icons/images';

const ListComponent = (props) => {
    const { setId } = props;
    const navigate = useNavigate();

    const handleDelete = () => {
        // console.log('delete');
    };
    const handleEdit = (clickedId) => {
        navigate('/update-employee');
        setId(clickedId);

    };
    return (
        <>
            <table className='mx-auto  mt-10 w-[96%] table-auto align-middle md:table-fixed'>
                <thead>
                    <tr className=" h-[60px] rounded-xl bg-aliceBlue shadow-xl" >
                        {columns.map(column => {
                            return (
                                <th className='p-4  text-center text-base font-normal' key={column}> {column}</th>
                            );
                        })}
                    </tr>
                </thead>


                {employees.map(employee => {
                    return (
                        // <div  className=''>
                        <tbody key={employee.id} className='m-10'>
                            <tr className=" m-4 h-4 rounded-xl bg-white"></tr>
                            <tr className=" m-4 h-14 rounded-xl bg-white shadow-md" >
                                <td className='m-2 ml-4 p-4 text-center'>   {employee.name}</td>
                                <td className='p-4 text-center'>   {employee.userName}</td>
                                <td className='p-4 text-center'>   {employee.age}</td>
                                <td className='p-4 text-center'>   {employee.role}</td>
                                <td className=' px-10 text-right lg:px-4 lg:text-left xl:px-7 2xl:px-12'>
                                    <div className={` h-8 w-28  rounded-2xl p-1 text-center
                        ${(employee.status) === 'Active' ? 'bg-teaGreen' : 'bg-paleRose'}
                         text-left md:w-28 lg:w-16 2xl:w-28`}>
                                        {employee.status}</div> </td>
                                <td className='p-4 text-center' >   {employee.departmentId}</td>
                                <td className='p-4 text-center'><button onClick={handleDelete}>
                                    <DeleteIcon />
                                </button>
                                    <DeleteModal />
                                    <button className="pl-5" onClick={() => handleEdit(employee.id)}>
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