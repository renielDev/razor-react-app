import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../shared/utils';
                  

const tabItemVariants = cva('', {
  variants: {
    intent: {
      base: '',
      full: 'flex-1',
    }
  },
  defaultVariants: {
    intent: 'base',
  }
})

type TabVariantProps = VariantProps<typeof tabItemVariants>
interface TabMenuProps extends TabVariantProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
  menuItems: { name: string, id: string }[];
}


const TabMenu: React.FC<TabMenuProps> = ({ activeTab, onTabChange, intent, menuItems }) => {
  
  const getListClassname = (menuItem: { name: string, id: string }) => {
    const _tabItemClassname = tabItemVariants({ intent })
    return cn('relative text-sm after:bg-primary-base cursor-pointer', {
      'after:bg-primary-base font-medium after:w-[100%] after:h-1 after:absolute after:left-0 after:bottom-[-13px]': activeTab === menuItem.id,
      'hover:opacity-50 transition-opacity duration-200': activeTab !== menuItem.id,
      [_tabItemClassname]: true,
    })
  }

  return (
    <div className="px-5 py-3 border-gray-200 border-b-1">
      <ul className='flex gap-8 text-center'>
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.id}
            className={getListClassname(menuItem)}
            onClick={() => onTabChange(menuItem.id)}
          >
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabMenu;
