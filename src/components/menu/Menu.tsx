
import { FC } from 'react';

interface Props {
}

const Menu: FC<Props> = () => {
  return <div className="px-5 py-3 border-gray-200 border-b-1">
    <ul className='flex flex-1 gap-8'>
      <li className='relative text-sm after:bg-primary-base after:w-[100%] after:h-1 after:absolute after:left-0 after:bottom-[-13px]'>General</li>
      <li className='text-sm'>Order Details</li>
      <li className='text-sm'>Estimate</li>
    </ul>
  </div>
};

export default Menu;

