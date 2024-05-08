import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=" fixed top-0 z-20 mx-auto w-full border-b-2 bg-white text-black">
      <div className="container navbar mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Category</a>
                <ul className="p-2 uppercase ">
                  <li>
                    <Link href={'/processor'}>Processor</Link>
                  </li>
                  <li>
                    <Link href={'/motherboard'}>motherboard</Link>
                  </li>
                  <li>
                    <Link href={'/ram'}>Ram</Link>
                  </li>
                  <li>
                    <Link href={'/power-supply'}>Power Supply</Link>
                  </li>
                  <li>
                    <Link href={'/hdd'}>Storage Device</Link>
                  </li>
                  <li>
                    <Link href={'/monitor'}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={'/others'}>Others</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href={'/'}>
            <button className="btn btn-ghost bg-blue-600 text-xl text-white hover:bg-blue-400">
              PC MASTER
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li className="hover:text-blue-600">
              <Link href={'/'}>HOME</Link>
            </li>
            <li>
              <details>
                <summary className="hover:text-blue-600">CATEGORY</summary>
                <ul className="z-2 bg-white p-2 ">
                  <li className="text-block">
                    <Link href={'/processor'}>Processor</Link>
                  </li>
                  <li>
                    <Link href={'/motherboard'}>motherboard</Link>
                  </li>
                  <li>
                    <Link href={'/ram'}>Ram</Link>
                  </li>
                  <li>
                    <Link href={'/power-supply'}>Power Supply</Link>
                  </li>
                  <li>
                    <Link href={'/hdd'}>Storage Device</Link>
                  </li>
                  <li>
                    <Link href={'/monitor'}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={'/others'}>Others</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-blue-600">
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href={'/builder'}
            className="btn btn-accent bg-blue-600 text-white hover:bg-blue-400"
          >
            PC Builder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
