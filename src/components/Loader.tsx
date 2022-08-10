import React from 'react';

const Loader = () => {

    return (
        <div className="relative top-40 flex  items-center justify-center">
            <div className="absolute h-10 w-10 animate-spin rounded-full border-r-4 border-brightCelurean" />
            <div className=" absolute h-8 w-8 animate-spinReverse rounded-full border-l-4 border-black" />
        </div>
    );
};

export default Loader;