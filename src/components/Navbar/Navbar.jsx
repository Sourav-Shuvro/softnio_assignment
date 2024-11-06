import React from "react";
import logo from "../../assets/navlogo.png";
const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Clients",
      path: "/clients",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="text-white">
      <div className="navbar font-popins" style={{padding: 0}}>
        <a href="/" className="btn btn-ghost text-xl" style={{padding: 0}}>
          <img src={logo} alt="logo" />
          <span><span style={{fontWeight: 600}}>Restu</span><span style={{fontWeight: 400}}>rant</span></span>
        </a>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-center ms-auto hidden lg:flex">
          <a href="/" className="temp-btn">
            BOOK A TABLE
          </a>
        </div>
        <div className="navbar-end ms-auto lg:hidden relative">
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
              className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] absolute mt-3 right-8 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
              <li>
                <a href="/" className="temp-btn">
                  BOOK A TABLE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
