import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { cx } from 'class-variance-authority';
import { useState } from 'react';
import { cn } from '../../shared/utils';
import './DropdownMenu.scss';

interface OptionItem {
  key: string;
  value: string;
}

type OptionValue = OptionItem | string | number | null;

interface DropdownMenuProps {
  options: OptionItem[] | string[] | number[];
  searchable?: boolean;
  value?: OptionValue;
  placeholder?: string;
  onSelectItem: (value: OptionValue) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, placeholder, searchable = false, value, onSelectItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [optionOpen, setOptionOpen] = useState(false);
  const filteredOptions = options.filter((option) => {
    if (typeof option === 'string') return option.toLowerCase().includes(searchTerm.toLowerCase())
    if (typeof option === 'number') return option.toString().includes(searchTerm.toLowerCase())
    if (typeof option === 'object') return option.value.toLowerCase().includes(searchTerm.toLowerCase())

    return false
  });
  const _dropdownOptionsClassname = cn('dropdownmenu', {
    'hidden': !optionOpen,
  })

  const selected = (option: OptionValue) => {
    if (typeof option === 'object') return option!.key === value
    if (typeof option === 'string' || typeof option === 'number') return option === value

    return option === value
  }

  const listOptionClass = (option: OptionValue) => {
    return cx('dropdownmenu--item', {
      'bg-gray-100': selected(option),
    })
  }
  
  const toggleOptionOpen = () => {
    setOptionOpen(!optionOpen)
  }

  const selectItem = (value: OptionValue) => {
    onSelectItem(value)
    setSearchTerm('')
    setOptionOpen(false)
  }

  return (
    <div className='relative w-full'>
      <div>
        {(!optionOpen || !searchable) && (
          <input
            className='w-full px-2 py-1 text-sm border-gray-200 rounded border-1'
            type="text"
            placeholder={placeholder}
            value={typeof value === 'object' ? value!.value : value}
            readOnly
            onClick={toggleOptionOpen}
          />
        )}
        {(searchable && optionOpen)  && (
          <input
            type='text'
            placeholder='Search...'
            className='w-full px-2 py-1 text-sm border-gray-200 rounded border-1'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        {!optionOpen && (<ChevronDownIcon className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 right-2 top-1/2' />)}
        {optionOpen && (<ChevronUpIcon className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 right-2 top-1/2' />)}
      </div>
      <div className={_dropdownOptionsClassname}>
        <ul className='overflow-y-auto max-h-[15rem]'>
          {filteredOptions.map((option: OptionValue) => (
            <li
              key={typeof option === 'object' ? option!.key : option}
              className={listOptionClass(option)}
              onClick={() => selectItem(option)}
            >
              {typeof option === 'object' ? option!.value : option}
            </li>
          ))}
        </ul>
        <div className='p-3 text-center transition-opacity duration-300 border-gray-200 cursor-pointer hover:opacity-70 text-primary-base border-t-1'>
          + Add new Address
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
