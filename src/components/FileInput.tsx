import React, { FC, useEffect, useState } from 'react';

import { FileInputProps } from './types';
import { ICONS } from 'constants/icons';
import FilesDragAndDrop from './FilesDragAndDrop';

const FileInput: FC<FileInputProps> = (props) => {

  const { setFiles, files, defaultFileText, registerFunction, registerName } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [closePreview, setClosePreview] = useState<boolean>(false);
  useEffect(() => {
    let fileReader: FileReader;
    let isCancel: boolean = false;
    if (files) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(files);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [files]);

  const handleClose = () => {
    setClosePreview(true);
    setFiles(null);
  };

  let fileText = (defaultFileText) ? defaultFileText : 'Choose File';

  return (
    <div>
      <label className="m-2 ml-4 font-sans text-lg" >Upload ID Proof</label>
      <div className='flex'>
        <div className=" m-2 ml-4 flex h-10 w-64 flex-initial rounded-md border border-gray-300  text-sm 
                        leading-5">
          <h6 className=' w-4/6 flex-initial p-2 text-sm leading-5 text-regentGrey'>
            {(files != null) ? (files.name) : fileText}</h6>
          <button className='m-1 w-2/6 flex-initial rounded-md  border border-gray-300 p-1 text-center
                                   text-sm leading-5 text-regentGrey'
            type='button'
            onClick={() => {
              setOpenModal(true);
              setClosePreview(false);
            }}>Browse</button>
        </div>
        <div className='flex flex-initial'>
          {(files != null && !(closePreview)) ?
            (<div className='ml-2 w-32 rounded-md border border-dashed border-gray-300'>
              <div className=' w-32 pr-1 text-right'>
                <button type='button' onClick={handleClose} className='cursor-pointer text-right '>
                  <span className={`h-[15px] w-[15px] pr-2  text-gray-500 transition 
                         duration-150 ease-in-out hover:text-gray-600 ${ICONS.fileInput}`} /></button>
              </div>
              <img className='h-[100px]' src={fileDataURL} alt="preview" />
            </div>
            ) : <div></div>}
        </div>
      </div>
      {openModal && (
        <FilesDragAndDrop setOpenModal={setOpenModal} setFiles={setFiles} file={files}
          registerFunction={registerFunction} registerName={registerName} />
      )}
    </div>
  );
};

export default FileInput;