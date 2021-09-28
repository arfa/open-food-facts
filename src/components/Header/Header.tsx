import clsx from 'clsx';
import { Link, useRouteMatch } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';

interface NavItem {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

export interface HeaderProps {
  brand: string;
  navList: NavItem[];
  style?: React.CSSProperties;
  className?: string;
}

function MenuLink({ label, to, activeOnlyWhenExact = true }: NavItem) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  console.log('label: ', label);
  console.log('match: ', match);
  
  return (
    <Link to={to}>
      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={clsx('btn btn-sm', {
          'btn-primary': match,
          'btn-ghost': !match,
        })}
        aria-current='page'
      >
        {label}
      </a>
    </Link>
  );
}

function MenuLinkMobile({ label, to, activeOnlyWhenExact: exact = false }: NavItem) {
  let match = useRouteMatch({
    path: to,
    exact,
  });

  return (
    <Link to={to}>
      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={clsx(
          'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
          {
            'bg-indigo-50 border-indigo-500 text-indigo-700': match,
          }
        )}
        aria-current='page'
      >
        {label}
      </a>
    </Link>
  );
}

const Header: React.FC<HeaderProps> = ({ brand, navList, className }) => {
  return (
    <Disclosure as='nav' className={`${className}`}>
      {({ open }) => (
        <>
          <div className='navbar mb-2 shadow-lg'>
            <div className='px-2 mx-2 navbar-start'>
              <span className='text-lg font-bold'>{brand}</span>
            </div>
            <div className='hidden px-2 mx-2 navbar-center lg:flex'>
              {navList.map((navItem, index) => (
                <MenuLink to={navItem.to} label={navItem.label} key={`menu-link-${index}`} />
              ))}
            </div>
            <div className='navbar-end'>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <HiX className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <HiMenu className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navList.map((navItem, index) => (
                <MenuLinkMobile to={navItem.to} label={navItem.label} key={`menu-link-${index}`} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
