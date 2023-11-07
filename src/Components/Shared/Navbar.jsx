import "./navbar.css"
import logo from "../../assets/logo.png"
import TopNav from "./TopNav";
const Navbar = () => {
  return (

    <>
    <TopNav/>
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
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
        <img src={logo} alt="Capi fund logo" className="w-20 h-20 object-cover"/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="hover:text-gray-600">
            <a className="hover:text-gray-600">Financing Solution</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:text-gray-600">Business Resources</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:text-gray-600">
            <a className="hover:text-gray-600">Partner Program</a>
          </li>
          <li className="hover:text-gray-600">
            <a className="hover:text-gray-600">About Us</a>
          </li>
          <li className="hover:text-gray-600">
            <a className="hover:text-gray-600">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
    </>
  );
};

export default Navbar;
