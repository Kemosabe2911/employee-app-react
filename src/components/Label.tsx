import React from 'react';
//import InputField from './InputField';

const Label = (props) => {
  const { name } = props;
  return (
    <div className='mt-4'>
      <label className="m-2 ml-4 font-sans text-lg" htmlFor="">{name}</label>
    </div>
  );
};
export default Label;