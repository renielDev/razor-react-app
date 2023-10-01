
interface FormInputLabelProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormInputLabel: React.FC<FormInputLabelProps> = ({ label, required, children }) => {
  return (
    <div className='flex flex-col mb-2'>
      <label htmlFor="" className='mb-1 text-sm'>{label} 
        {required && <span className="ml-1 text-red-500">*</span>}</label>
      {children}
    </div>
  );
};

export default FormInputLabel;
