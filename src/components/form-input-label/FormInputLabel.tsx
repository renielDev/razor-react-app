import { ClassValue } from "class-variance-authority/types";
import { cn } from "../../shared/utils";


interface FormInputLabelProps {
  label: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: ClassValue
}

const FormInputLabel: React.FC<FormInputLabelProps> = ({ label, required, children, className }) => {
  const _className = cn('flex flex-col mb-2', className)
  return (
    <div className={_className}>
      <label htmlFor="" className='mb-1 text-sm font-medium'>{label} 
        {required && <span className="ml-1 text-red-500">*</span>}</label>
      {children}
    </div>
  );
};

export default FormInputLabel;
