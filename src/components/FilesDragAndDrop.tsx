import React from 'react';
import Button from './Button';

const FilesDragAndDrop=(props)=>{

   const{open}=props;
    const handleUpload=()=>{
       // eslint-disable-next-line no-console
       console.log('upload');
    };
    const handleCancel=()=>{
       open(false);
    };
    
    return(
        <form  className='fixed inset-0  h-full w-full overflow-y-auto bg-gray-600/60'
         onSubmit={(e)=>e.preventDefault()}>
           <div className='relative top-60 mx-auto h-[440px] w-[600px] rounded-md border
            bg-white p-5 opacity-100 shadow-lg'>
                <div className='m-3 mt-3 mb-6 flex text-left text-black'>
                     <p className='flex-initial text-xl font-normal'>Upload Proof</p>
                </div>
                <div className='mx-auto h-[234px] w-[518px] rounded-md border-2 border-dashed border-gray-300'>
                   <input type="file" className='hidden' />
                   <label htmlFor="input-file-upload">
                    <div className='p-20 text-center'>
                        <p className='  text-xl font-normal
                         text-brightCelurean'>Drag and drop your file here </p>
                        <button>Browse</button>
                    </div>
                   </label>
                </div>
                <div className='m-4 mx-auto flex w-[100%]'>
                    <div className='w-1/2 text-right'>
                    <Button type="submit" bgcolor='w-[149px] bg-brightCelurean' textcolor='text-white' 
                                bghover='hover:bg-brightsCelurean' text='Upload' border='border border-blue-500'
                                onclick={handleUpload} />
                    </div>
                    <div className='w-1/2 text-left'>
                    <Button  type="submit" bgcolor='w-[149px] bg-white' 
                                textcolor='text-black' 
                                bghover='hover:bg-white' text='Cancel' 
                                border='border border-zinc-900 hover:border-brightCelurean'
                                onclick={handleCancel}/>
                    </div>
                 
                </div>
           </div>
           {/* { dragActive && <div id="drag-file-element"
            onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }  */}
        </form>
    );
};
export default FilesDragAndDrop;
//flex h-[200px] w-[300px] rounded-md border p-[50px]