import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useLazyGetEmployeeDetailsQuery } from 'services/api';

import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';
import MainBar from 'components/MainBar';
import PopUp from 'components/PopUp';

const EmployeeDetails: FC = () => {

    const urlId = useParams();
    const url = '/update-employee/' + urlId.id;

    const [getEmployeeDetails, { isFetching: isFetchingEmployeeDetails, data: data, error: error }] =
        useLazyGetEmployeeDetailsQuery();

    useEffect(() => {
        getEmployeeDetails(urlId.id);
    }, [urlId]);

    if (error) {
        return <PopUp description={'Cannot load Employee Details'}
            margin={'absolute inset-x-0 bottom-16 h-16 w-[15%] min-w-[450px] border-rose-600 bg-red-50'}></PopUp>;
    }
    if (isFetchingEmployeeDetails) {
        return (<div>
            Loading...
        </div>);
    }

    return (
        <div>
            <MainBar description='Employee Details' buttonRequired={true}
                buttonDescription="Update Employee" buttonIcon="fa fa-pencil" buttonNavigateUrl={url} />
            <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
                <EmployeeDetailsComponent data={data} />
            </div>
        </div>
    );
};

export default EmployeeDetails;