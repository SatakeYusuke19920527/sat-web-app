'use client';
import { NavItemType } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegCheckSquare } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

import SiteIcon from './SiteIcon';

const SideMenu = () => {
  const pathname = usePathname();
  const navList: NavItemType[] = [
    {
      id: "1",
      label: 'Udemy',
      link: '/',
      icon: <SiUdemy className='size-5' />,
    },
    {
      id: "2",
      label: 'About Me',
      link: '/aboutme',
      icon: <FaRegCheckSquare className="size-5" />,
    },
    // {
    //   id: "3",
    //   label: 'Expired Tasks',
    //   link: '/expired',
    //   icon: <FaRegClock className="size-5" />,
    // },
    // {
    //   id: "4",
    //   label: 'Auth Page',
    //   link: '/login',
    //   icon: <IoMdLogIn className="size-5" />,
    // },
  ];
  return (
    <div className="w-56 pt-8 bg-gray-900 text-white h-full">
      <h1 className="px-4 text-2xl font-bold flex items-center justify-center">
        <SiteIcon />
      </h1>
      <div className="mt-12">
        {navList.map((navItem) => {
          return (
            <Link
              key={navItem.id}
              href={navItem.link}
              className={`flex p-4 items-center w-full hover:bg-gray-700 font-medium ${
                pathname === navItem.link
                  ? 'bg-gray-600 border-r-4 border-r-green-500'
                  : ''
              }`}
            >
              <div className="mr-1">{navItem.icon}</div>
              <div>{navItem.label}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
