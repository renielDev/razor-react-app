import React from 'react';
import { IconTruck, IconTruckCarrier, IconDropOff } from '../icons';
import { cn } from '../../shared/utils';

export type LogisticType = 'our-trucking' | 'common-carrier' | 'client-drop-off';

interface LogisticTypeMenuProps {
  onSelect: (selectedOption: string) => void;
  value: LogisticType;
}

const LogisticTypeMenu: React.FC<LogisticTypeMenuProps> = ({ onSelect, value }) => {
  const handleSelect = (selectedOption: LogisticType) => {
    onSelect(selectedOption);
  };

  const isSelectedIconContainer = (option: LogisticType) => {
    return cn('flex flex-col transition-colors duration-300 items-center justify-center p-3 rounded border-1 group hover:bg-primary-base hover:text-white', {
      'border-primary-base bg-primary-base text-white': option === value,
    })
  }

  const isSelectedIcon = (option: LogisticType) => {
    return cn('h-4 mb-3 group-hover:fill-white', {
      'fill-white': option === value,
    })
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className={isSelectedIconContainer('our-trucking')} onClick={() => handleSelect('our-trucking')}>
        <IconTruck className='h-4 mb-3' pathClassName={isSelectedIcon('our-trucking')} />
        <label htmlFor="">Our Trucking</label>
      </div>
      <div className={isSelectedIconContainer('common-carrier')} onClick={() => handleSelect('common-carrier')}>
        <IconTruckCarrier className='h-4 mb-3' pathClassName={isSelectedIcon('common-carrier')} />
        <label htmlFor="">Common Carrier</label>
      </div>
      <div className={isSelectedIconContainer('client-drop-off')} onClick={() => handleSelect('client-drop-off')}>
        <IconDropOff className='h-4 mb-3' pathClassName={isSelectedIcon('client-drop-off')} />
        <label htmlFor="">Client Drop Off</label>
      </div>    
    </div>
  );
};

export default LogisticTypeMenu;
