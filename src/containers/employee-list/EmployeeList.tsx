import React, { FC, useState } from 'react';

import { useGetEmployeeListQuery } from 'services/api';
import ListComponent from 'components/ListComponent';
import MainBar from 'components/MainBar';
import PopUp from 'components/PopUp';

const EmployeeList: FC = () => {
    const [status, setStatus] = useState<string>(null);
    const [text, setText] = useState<string>('');
    const { data: EmployeeListData, error, isLoading } = useGetEmployeeListQuery(text);

    return (
        <div>
            {error ? (<PopUp description={'Cannot load Department List'}
                margin={'mt-20 fixed inset-10 h-16 w-[15%] min-w-[450px] border-rose-600 bg-red-50'} />) :
                (<div> {isLoading ? (<div>Loading</div>) : (
                    <div>
                        <MainBar description='Employee List'
                            buttonRequired={true}
                            buttonDescription="Create Employee"
                            buttonIcon="fa fa-plus"
                            buttonNavigateUrl="/create-employee"
                            setStatus={setStatus}
                            text={text}
                            setText={setText}>
                        </MainBar>
                        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
                            <ListComponent status={status} text={text} EmployeeList={EmployeeListData} />
                        </div>
                    </div>
                )}
                </div>)}
        </div>
    );
};

export default EmployeeList;