import React, { FC, useState } from 'react';

import Button from './Button';
import { FilesDragAndDropProps } from './types';

const FilesDragAndDrop: FC<FilesDragAndDropProps> = (props) => {

  const { setOpenModal, setFiles, file } = props;

  const handleUpload = (droppedFile: any) => {
    setFiles(droppedFile);
    setOpenModal(false);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef: React.MutableRefObject<any> = React.useRef(null);

  //handle drag events
  const handleDrag = (e: any) => {
    e.preventDefault();               //cancels the event if it is cancelable
    e.stopPropagation();              //To prevent  event from further propagation in the capturing and bubbling phases
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    }
    else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleFiles = (files: any) => {
    handleUpload(files);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {  // at least one file has been dropped so do something 
      handleFiles(e.dataTransfer.files[0]);   //The files property of DataTransfer objects is a list of the files in 
      //the drag operation.If the operation includes no files, the list is empty.
    }
  };

  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {   // at least one file has been selected so do something
      handleFiles(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className='fixed inset-0 h-full w-full overflow-y-auto bg-gray-600/60 pl-20'>
      <div className='relative inset-x-36 top-60 mx-auto h-[460px]  w-[600px] rounded-md border bg-white
                      p-5 opacity-100 shadow-lg'>
        <div className='m-3 mt-3 mb-6 flex text-left text-black'>
          <p className='flex-initial text-xl font-normal'>Upload Proof</p>
        </div>
        <div onDragEnter={handleDrag}
             onDragLeave={handleDrag}
             onDragOver={handleDrag}
             onDrop={handleDrop}
             className='mx-auto h-[260px] w-[518px] rounded-md border-2 border-dashed border-gray-300'>
          <label htmlFor="input-file-upload" className='h-[100%]'>
            <input ref={inputRef} 
                  type="file" className='hidden' onChange={handleChange} />
            <div className='p-20 text-center'>
              <p className='  text-xl font-normal text-brightCelurean'>Drag and drop your file here </p>
              <p className='p-1 text-sm font-normal'>Or</p>
              <button type='button'
                onClick={onButtonClick}
                className='h-[34px] w-[149px] rounded-xl bg-gray-200 text-base font-normal text-brightCelurean'>
                Browse File</button>
              <p className='p-2 text-center'>{file?.name} </p>
            </div>
          </label>
          {dragActive &&
            <div onDragEnter={handleDrag}
              onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
            </div>}
        </div>
        <div className='m-4 mx-auto flex w-[100%]'>
          <div className='w-1/2 text-right'>
            <Button type="button" bgcolor='w-[149px] bg-brightCelurean' textcolor='text-white'
              bghover='hover:bg-brightsCelurean' text='Upload' border='border border-blue-500'
              onclick={() => handleUpload(file)} />
          </div>
          <div className='w-1/2 text-left'>
            <Button type="button" bgcolor='w-[149px] bg-white'
              textcolor='text-black'
              bghover='hover:bg-white' text='Close'
              border='border border-zinc-900 hover:border-brightCelurean'
              onclick={handleCancel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilesDragAndDrop;
