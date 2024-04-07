'use client'
import { siteConfig } from '@/const/site.config';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <nav className="relative flex flex-wrap items-center justify-between py-3  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
      <ul className="container-fluid w-full flex flex-wrap justify-end px-6">
        <li className="md:flex items-center hidden md:justify-end bg-grey-light rounded-md w-1/2">
          <div className="bg-grey-light rounded-md text-right">
            <Link
              href="/app/how-it-works"
              className="text-gray-500 hover:text-gray-600"
            >
              {siteConfig.title}
            </Link>
          </div>
        </li>
        {/* ハンバーガーメニュー */}
        <li className="bg-grey-light rounded-md w-1/2 md:hidden text-right">
          <div className="bg-grey-light rounded-md md:hidden">
            <button
              onClick={handleMenu}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </li>
        <div
          id="defaultModal"
          style={{ display: isOpenMenu ? 'block' : 'none' }}
          tabIndex={-1}
          aria-hidden="true"
          className="slide-in-right fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              onClick={handleMenu}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="crypto-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="px-6 py-4 border-b rounded-t ">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl ">
                {siteConfig.title}
              </h3>
            </div>
            <div className="p-6">
              <ul className="my-4 space-y-3">
                <li>
                  <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                    <Link
                      href="/app/"
                      onClick={handleMenu}
                      className="text-gray-700 hover:text-gray-800 flex-1 ml-3 whitespace-nowrap"
                    >
                      test1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                    <Link
                      href="/app/how-it-works"
                      onClick={handleMenu}
                      className="text-gray-700 hover:text-gray-800 flex-1 ml-3 whitespace-nowrap"
                    >
                      test2
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
