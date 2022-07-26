import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// import { EMPLOYEE_DETAIL_ITEM as employees } from 'constants/employeeDetailItem';
import { columns } from 'constants/ListHeader';
import DeleteModal from './DeleteModal';
import { DeleteIcon, EditIcon } from 'assets/icons/images';
import { ListComponentProps } from './types';
import { useGetEmployeeListQuery } from 'services/api';

const ListComponent: FC<ListComponentProps> = (props) => {
    const { data } = useGetEmployeeListQuery();

    const { setId } = props;
    const navigate = useNavigate();

    const handleDelete = () => {
        // console.log('delete');
    };
    const handleEdit = (clickedId:number) => {
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
                                <td className='p-4 text-center'><button onClick={handleDelete}>
                                    <DeleteIcon />
                                </button>
                                    <DeleteModal />
                                    <button className="pl-5" onClick={() => handleEdit(employee.Id)}>
                                        <EditIcon />
                                    </button></td>
                            </tr>
                        </tbody>

                        // </div>


                    );
                })}

            </table>
        </>

    );

};
export default ListComponent;