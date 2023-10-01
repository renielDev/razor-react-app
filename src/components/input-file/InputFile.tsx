
import React from 'react';
import { IconFile } from '../icons';
import './InputFile.scss'
import { TrashIcon } from '@heroicons/react/20/solid';

type FileExtension = '.jpg' | '.jpeg' | '.png' | '.pdf' | '.doc' | '.docx' | '.xls' | '.xlsx' | '.ppt' | '.pptx';

interface InputFileProps {
  allowedTypes?: FileExtension[];
  maxFileSize?: number;
  onFileSelect: (file: File | null) => void;
}

const InputFile: React.FC<InputFileProps> = ({ allowedTypes=['.pdf', '.doc', '.xls', '.xlsx'], maxFileSize=100, onFileSelect }) => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const maxFileSizeInMb = maxFileSize * 1024 * 1024;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (allowedTypes.includes(fileExtension as FileExtension) && file.size <= maxFileSizeInMb) {
        setSelectedFile(file)
        onFileSelect(file);
      } else {
        alert(`Invalid file type or size. Allowed extensions: ${allowedTypes.join(', ')}. Max file size: ${maxFileSize}mb.`);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleRemoveFile = () => {
    onFileSelect(null);
    setSelectedFile(null);
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (allowedTypes.includes(fileExtension as FileExtension) && file.size <= maxFileSizeInMb) {
        onFileSelect(file);
      } else {
        alert(`Invalid file type or size. Allowed types: ${allowedTypes.join(', ')}. Max file size: ${maxFileSize}mb.`);
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center px-4 py-6 text-sm text-gray-500 justify-items-center" onDragOver={handleDragOver} onDrop={handleDrop}>
      {!selectedFile && (
        <>
          <div className='flex mb-2'>
            <IconFile className='mr-1' />
            Drag & Drop or <label htmlFor="file-input" className='ml-1 font-semibold underline cursor-pointer'>Browse</label>
          </div>
          <div>{allowedTypes.join(', ')} files are allowed. Max {maxFileSize}mb</div>
          <input id="file-input" type="file" className="input-file" onChange={handleFileSelect} />
        </>
      )}
      {selectedFile && (
        <div className='flex items-center pb-1 border-white hover:border-gray-200 border-b-1 hover:opacity-60'>
          <IconFile className='mr-1 ' pathClassName='fill-emerald-400' />
          <span className='font-medium'>{selectedFile?.name}</span>
          <TrashIcon className='w-4 h-4 ml-1 text-red-500 cursor-pointer' onClick={handleRemoveFile} />
        </div>
      )}
    </div>
  );
};

export default InputFile;
