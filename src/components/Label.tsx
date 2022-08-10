import React, { FC } from 'react';

import { LabelProps } from './types';

const Label: FC<LabelProps> = (props) => {

  const { name } = props;

  return (
    <div className='mt-4  md:justify-center'>
      <label className="m-2 ml-4 font-sans text-lg">{name}</label>
    </div>
  );
};

export default Label;