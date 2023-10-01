import React from 'react';
import { cn } from '../../shared/utils';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
};

const TextInput: React.FC<TextInputProps> = ({ className, ...props }) => {
  const _className = cn('px-2 py-1 text-sm border-gray-200 rounded border-1', className)
  return (
    <input className={_className} {...props} />
  );
};

export default TextInput;
