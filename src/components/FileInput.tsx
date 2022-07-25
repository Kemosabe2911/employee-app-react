import React from 'react';

const FileInput =()=>{

    return(
        <div>
            <label className="m-2 ml-4 font-sans text-lg" >Upload File</label>
            <div className=" m-2 ml-4 flex 
              h-10 w-56 rounded-md border border-gray-300 text-sm leading-5">
               <h6 className='w-4/6 flex-initial p-2 text-sm leading-5 text-regentGrey'>Choose File</h6>
               <button className='m-1 w-2/6 flex-initial rounded-md  border border-gray-300 p-1
                text-center text-sm leading-5 text-regentGrey'>Browse</button>
            </div>

             {/* <input type="file"  className=" m-2 ml-4 hidden
              h-10 w-56 rounded-md border border-gray-300 p-4 text-sm leading-5">
                
                </input> */}
        </div>
    );
};
export default FileInput;