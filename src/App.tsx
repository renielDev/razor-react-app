import avatarIcon from './assets/avatar.svg'
import questionIcon from './assets/icon-question.svg'
import settingsIcon from './assets/icon-settings.svg'
import logoIcon from './assets/logo.svg'
import IconTruck from './components/icons/IconTruck'
import IconTruckCarrier from './components/icons/IconTruckCarrier'
import IconDropOff from './components/icons/IconDropOff'
import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import './App.scss'

function App() {
  return (
    <>
      <div className="header">
        <div className='flex'>
          <span className="icon">
            <img src={logoIcon} alt="razor logo" />
          </span>
          <ul className='flex items-center gap-5 px-6'>
            <li className='flex items-center'>Dashboard <ChevronDownIcon className='h-4 ml-1' /></li>
            <li className='flex items-center'>CRM <ChevronDownIcon className='h-4 ml-1' /></li>
            <li className='flex items-center'>Inventory <ChevronDownIcon className='h-4 ml-1' /></li>
          </ul>
        </div>
        <div className="flex gap-3 px-6 icon-menus">
          <ul className='flex items-center gap-3'>
            <li>
              <img src={settingsIcon} alt="settings" />
            </li>
            <li>
              <img src={questionIcon} alt="question" />
            </li>
          </ul>
          <span className="avatar">
            <img src={avatarIcon} alt="John Doe" />
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-grow content">
        <div className="flex items-center justify-between px-6 py-3 shadow app-header">
          <div className="flex items-center">
            <button className='p-1 rounded shadow-sm border-1'><ChevronLeftIcon className='h-8' /></button>
            <h1 className='ml-3 text-2xl font-semibold'>Create Inbound Order</h1>
          </div>
          <div className="flex items-center gap-3 action-buttons">
            <button className='px-3 py-1 rounded shadow-sm ray-300 border-1'>To Dispatch</button>
            <div className="w-0 border-r-1 h-7"></div>
            <button className='flex items-center px-3 py-1 rounded shadow-sm ray-300 border-1'>Actions <ChevronDownIcon className='h-4 ml-1'/></button>
            <button className='flex items-center px-3 py-1 text-white rounded bg-primary-base ray-300 border-1'>Create Order</button>
          </div>
        </div>
        <div className="px-5 py-3 border-gray-200 border-b-1 submenu">
          <ul className='flex flex-1 gap-8'>
            <li className='relative text-sm after:bg-primary-base after:w-[100%] after:h-1 after:absolute after:left-0 after:bottom-[-13px]'>General</li>
            <li className='text-sm'>Order Details</li>
            <li className='text-sm'>Estimate</li>
          </ul>
        </div>

        <div className="flex flex-col flex-grow w-full gap-4 p-4 bg-colorbg">
          <div className='p-4 bg-white rounded'>
            <h4 className='mb-4 text-base font-semibold'>General</h4>
            <div className="flex gap-4">
              <div className='flex-1'>
                <div className='flex flex-col mb-2'>
                  <label htmlFor="" className='mb-1 text-sm'>Account Name</label>
                  <input type="text" placeholder='Input text' className='px-2 py-1 text-sm border-gray-200 rounded border-1' />
                </div>
                <div className='flex flex-col mb-2'>
                  <label htmlFor="" className='mb-1 text-sm'>Account Name</label>
                  <input type="text" placeholder='Input text' className='px-2 py-1 text-sm border-gray-200 rounded border-1' />
                </div>
              </div>
              <div className='flex-1'>
                <div className='flex flex-col mb-2'>
                  <label htmlFor="" className='mb-1 text-sm'>Account Name</label>
                  <input type="text" placeholder='Input text' className='px-2 py-1 text-sm border-gray-200 rounded border-1' />
                </div>
                <div className='flex flex-col mb-2'>
                  <label htmlFor="" className='mb-1 text-sm'>Account Name</label>
                  <input type="text" placeholder='Input text' className='px-2 py-1 text-sm border-gray-200 rounded border-1' />
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 bg-white rounded'>
            <h4 className='mb-4 text-base font-semibold'>Select Logistic Type</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className='flex flex-col items-center justify-center p-3 text-white rounded border-1 border-primary-base bg-primary-base'>
                <IconTruck className='h-4 mb-3' pathClassName='fill-white' />
                <label htmlFor="">Our Trucking</label>
              </div>
              <div className='flex flex-col items-center justify-center p-3 border-gray-200 rounded border-1'>
                <IconTruckCarrier className='h-4 mb-3' pathClassName='fill-gray-400' />
                <label htmlFor="">Common Carrier</label>
              </div>
              <div className='flex flex-col items-center justify-center p-3 border-gray-200 rounded border-1 '>
                <IconDropOff className='h-4 mb-3' pathClassName='fill-gray-400' />
                <label htmlFor="">Client Drop Off</label>
              </div>
            </div>
          </div>
          <div className='p-4 bg-white rounded'>
            <h4 className='mb-4 text-base font-semibold'>Notes</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="border-gray-200 rounded border-1">
                  <div className="px-5 py-3 border-gray-200 border-b-1 submenu">
                    <ul className='flex flex-1 gap-8'>
                      <li className='relative text-sm font-medium after:bg-primary-base after:w-[100%] after:h-1 after:absolute after:left-0 after:bottom-[-13px]'>Work Instructions</li>
                      <li className='text-sm'>Internal Notes</li>
                      <li className='text-sm'>Field Notes</li>
                    </ul>
                  </div>
                  <div className="px-4 py-2">
                    <label className='text-sm'>Preselected Text</label>
                    <select name="" id="" className='w-full px-1 py-1 mb-2 text-sm border-gray-200 rounded border-1'>
                      <option value="">Select</option>
                      <option value="">Select</option>
                      <option value="">Select</option>
                      <option value="">Select</option>
                    </select>
                    <textarea name="" id="" rows={4} className='w-full px-2 py-1 text-sm border-gray-200 rounded-sm border-1'></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 bg-white rounded'>
            <h4 className='mb-4 text-base font-semibold'>Files and Images</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="border-gray-200 border-dashed rounded border-1">
                  <div className="px-5 py-3 border-gray-200 border-b-1 submenu">
                    <ul className='grid grid-cols-2 text-center'>
                      <li className='relative text-sm font-medium after:bg-primary-base after:w-[100%] after:h-1 after:absolute after:left-0 after:bottom-[-13px]'>Files</li>
                      <li className='text-sm'>Images</li>
                    </ul>
                  </div>
                  <div className="px-4 py-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
