import React from 'react';

import { ICONS } from 'constants/icons';

const SearchElement = (props) => {
    const inputRef: React.MutableRefObject<any> = React.useRef(null);
    const { setText, text } = props;
    const handleText = () => {
        setText(inputRef.current.value);
    };
   
    return (
        <>
            <span className={`h-[48px] w-[48px] flex-initial rounded-full bg-brightCelurean p-[16px]
                         text-white duration-300 hover:scale-110 ${ICONS.search}`} />
            <input
                onChange={() => handleText()}
                ref={inputRef}
                value={text}
                placeholder="Search"
                className="mt-1 h-10  w-20 flex-initial
                cursor-pointer bg-aliceBlue p-2  text-sm leading-5  text-gray-800
               focus:outline-none"
            />
        </>
    );
};

export default SearchElement;