import avatarIcon from './assets/avatar.svg'
import questionIcon from './assets/icon-question.svg'
import settingsIcon from './assets/icon-settings.svg'
import logoIcon from './assets/logo.svg'
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
          <ul className='flex gap-3'>
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
        <div className="flex items-center justify-between px-6 py-3 shadow-md app-header">
          <div className="flex items-center">
            <button className='p-1 border-2 shadow-sm'><ChevronLeftIcon className='h-8' /></button>
            <h1 className='ml-3 text-2xl font-semibold'>Create Inbound Order</h1>
          </div>
          <div className="flex items-center gap-3 action-buttons">
            <button className='px-3 py-1 border-2 rounded-md shadow-sm ray-300 border-1'>To Dispatch</button>
            <div className="w-0 border-r-2 h-7"></div>
            <button className='flex items-center px-3 py-1 border-2 rounded-md shadow-sm ray-300 border-1'>Actions <ChevronDownIcon className='h-4 ml-1'/></button>
            <button className='flex items-center px-3 py-1 text-white rounded-md bg-primary-base ray-300 border-1'>Create Order</button>
          </div>
        </div>
        <div className="px-5 py-3 border-b-2 border-gray-200 submenu">
          <ul className='flex flex-1 gap-8'>
            <li className='relative text-sm after:bg-primary-base after:w-[100%] after:h-1 after:absolute after:left-0 after:bottom-[-13px]'>General</li>
            <li className='text-sm'>Order Details</li>
            <li className='text-sm'>Estimate</li>
          </ul>
        </div>

        <div className="flex-grow w-full p-4 bg-colorbg">
          <div className='p-4 bg-white rounded-md shadow-sm'>
            <h4 className='text-base font-semibold'>General</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
