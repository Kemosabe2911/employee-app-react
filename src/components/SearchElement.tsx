import React, { useState } from 'react';

const SearchElement = () => {
    const [text, setText] = useState<string>('');

    const handleText = (e) => {
        setText(e.target.value);
    };
    const search = 'fa fa-search';
    return (
        <>
            <span className={`h-[48px] w-[48px] flex-initial rounded-full bg-brightCelurean p-[16px]
                         text-white duration-300 hover:scale-110 ${search}`} />
            <input
                onChange={e => handleText(e)}
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