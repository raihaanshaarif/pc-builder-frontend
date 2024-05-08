import React, { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession()
  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to close the dropdown explicitly
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 z-20 mx-auto w-full border-b-2 bg-white text-black">
      <div className="container navbar mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li><a onClick={closeDropdown}>Item 1</a></li>
                <li>
                  <a onClick={toggleDropdown}>Category</a>
                  <ul className="p-2">
                    <li><Link href='/processor' onClick={closeDropdown}>Processor</Link></li>
                    <li><Link href='/motherboard' onClick={closeDropdown}>Motherboard</Link></li>
                    <li><Link href='/ram' onClick={closeDropdown}>Ram</Link></li>
                    <li><Link href='/power-supply' onClick={closeDropdown}>Power Supply</Link></li>
                    <li><Link href='/hdd' onClick={closeDropdown}>Storage Device</Link></li>
                    <li><Link href='/monitor' onClick={closeDropdown}>Monitor</Link></li>
                    <li><Link href='/others' onClick={closeDropdown}>Others</Link></li>
                  </ul>
                </li>
                <li><a onClick={closeDropdown}>Item 3</a></li>
              </ul>
            )}
          </div>
          <Link href={'/'}>
            <button className="btn btn-ghost bg-blue-600 text-xl text-white hover:bg-blue-400">
              PC MASTER
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-blue-600"><Link href={'/'}>HOME</Link></li>
            <li>
              <details open={dropdownOpen} onClick={toggleDropdown}>
                <summary className="hover:text-blue-600">CATEGORY</summary>
                <ul className="bg-white p-2">
                  <li><Link href='/processor'>Processor</Link></li>
                  <li><Link href='/motherboard'>Motherboard</Link></li>
                  <li><Link href='/ram'>Ram</Link></li>
                  <li><Link href='/power-supply'>Power Supply</Link></li>
                  <li><Link href='/hdd'>Storage Device</Link></li>
                  <li><Link href='/monitor'>Monitor</Link></li>
                  <li><Link href='/others'>Others</Link></li>
                </ul>
              </details>
            </li>
            <li className="hover:text-blue-600"><a>CONTACT</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/builder'} className="btn btn-accent bg-blue-600 text-white hover:bg-blue-400">
            PC Builder
          </Link>
          <div>
            {session ? <button onClick={()=>signOut()}  className="btn btn-accent bg-blue-600 text-white hover:bg-blue-400">
            Signout
          </button>: <><Link href={'/signin'} className="btn btn-accent bg-blue-600 text-white hover:bg-blue-400">
            Signin
          </Link>
          </>}
          
          
         

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
