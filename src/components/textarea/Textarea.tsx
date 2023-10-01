import React, { TextareaHTMLAttributes } from 'react';
import { cn } from '../../shared/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea: React.FC<TextareaProps> = ({ name, rows, className, ...props }) => {
  const _className = cn('w-full px-2 py-1 text-sm border-gray-200 rounded border-1', className)
  return (
    <textarea
      name={name}
      id={name}
      rows={rows}
      className={_className}
      {...props}
    ></textarea>
  );
};

export default Textarea;
