import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" mx-auto text-black fixed top-0 z-20 bg-white w-full ">
      <div className="navbar bg-base-100 container mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href={'/'}><button className="btn btn-ghost text-xl text-white bg-blue-600 hover:bg-blue-400">PC MASTER</button></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li className="hover:text-blue-600">
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary className="hover:text-blue-600">Parent</summary>
                <ul className="p-2 bg-white z-2 ">
                  <li className="text-block">
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-blue-600">
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-accent bg-blue-600 text-white hover:bg-blue-400">PC Builder</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
