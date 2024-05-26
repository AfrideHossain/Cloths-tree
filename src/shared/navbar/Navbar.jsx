import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>Shop</Link>
      </li>
      <li>
        <Link to={"/"}>About</Link>
      </li>
      <li>
        <Link to={"/"}>Report</Link>
      </li>
      <li>
        <Link to={"/"}>FAQ</Link>
      </li>
      <li>
        <Link to={"/"}>Dashboard</Link>
      </li>
    </>
  );
  return (
    <>
      <nav className="navbar bg-base-100 sticky top-0 z-[999]">
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
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Cloth Tree</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
