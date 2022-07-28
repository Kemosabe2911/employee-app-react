import React, { useState } from 'react';
import Button from './Button';

const FilesDragAndDrop = (props) => {

  const { open } = props;
  const handleUpload = () => {
    // eslint-disable-next-line no-console
    console.log(files);
    open(false);
  };
  const handleCancel = () => {
    open(false);
  };
  const [dragActive, setDragActive] = useState(false);
  const [files,setfiles]=useState(null);
  const inputRef = React.useRef(null);
  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault(); //cancels the event if it is cancelable
    e.stopPropagation(); //To prevent  event from further propagation in the capturing and bubbling phases
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const handleFiles = (file) => {
   setfiles(file);
  };
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      handleFiles(e.dataTransfer.files);
    }
  };
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      handleFiles(e.target.files);
    }
  };
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className='fixed inset-0  h-full w-full overflow-y-auto bg-gray-600/60'>
      <div className='relative top-60 mx-auto h-[440px] w-[600px] rounded-md border
            bg-white p-5 opacity-100 shadow-lg'>
        <div className='m-3 mt-3 mb-6 flex text-left text-black'>
          <p className='flex-initial text-xl font-normal'>Upload Proof</p>
        </div>
        <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
          onSubmit={(e) => e.preventDefault()}
          className='mx-auto h-[234px] w-[518px] rounded-md border-2 border-dashed border-gray-300'>
          <label htmlFor="input-file-upload" className='h-[100%]'>
            <input ref={inputRef} type="file" className='hidden' onChange={handleChange} />
            <div className='p-20 text-center'>
              <p className='  text-xl font-normal
                         text-brightCelurean'>Drag and drop your file here </p>
              <p className='p-1 text-sm font-normal'>Or</p>
              <button onClick={onButtonClick} className='h-[34px] w-[149px]
                             rounded-xl bg-gray-200 text-base font-normal text-brightCelurean'>Browse File</button>
                               {files?.length} 
            </div>
          </label>
          {dragActive && <div  onDragEnter={handleDrag} 
            onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
              </div>}
           
        </div>
        <div className='m-4 mx-auto flex w-[100%]'>
          <div className='w-1/2 text-right'>
            <Button type="submit" bgcolor='w-[149px] bg-brightCelurean' textcolor='text-white'
              bghover='hover:bg-brightsCelurean' text='Upload' border='border border-blue-500'
              onclick={handleUpload} />
              {console.log(files?.length)}
          </div>
          <div className='w-1/2 text-left'>
            <Button type="submit" bgcolor='w-[149px] bg-white'
              textcolor='text-black'
              bghover='hover:bg-white' text='Cancel'
              border='border border-zinc-900 hover:border-brightCelurean'
              onclick={handleCancel} />
          </div>

        </div>
      </div>
    </div>
  );
};
export default FilesDragAndDrop;
