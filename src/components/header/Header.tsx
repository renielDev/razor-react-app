import avatarIcon from '../../assets/avatar.svg'
import questionIcon from '../../assets/icon-question.svg'
import settingsIcon from '../../assets/icon-settings.svg'
import logoIcon from '../../assets/logo.svg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = () => {
  return  (
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
  )
}

export default Header