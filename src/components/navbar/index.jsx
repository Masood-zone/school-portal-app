import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { NAVBAR_DATA } from "./data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { dashboardLogo } from "../../assets/svgs";
import classNames from "classnames";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-64 h-full bg-[#901AD8] text-white flex px-5 py-5 flex-col items-center gap-0 rounded-3xl mx-2">
      <div className="w-36 h-36 bg-[#7B11BC] rounded-lg mt-10">
        <img
          src={dashboardLogo}
          alt="main-icon"
          className="w-full h-full scale-150"
        />
      </div>
      <div className="flex flex-col items-start justify-start px-3 py-1 mt-4">
        {NAVBAR_DATA.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            className={classNames(
              "flex items-center justify-start w-full h-12 rounded-lg my-2",
              {
                "text-white": location.pathname === item.url,
                "text-gray-300": location.pathname !== item.url,
              }
            )}
          >
            <img src={item.icon} alt={item.title} className="" />
            <span className="ml-3">{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

export function MobileNav() {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-16 bg-[#901AD8] text-white flex px-5 py-5 items-center justify-between">
      <div className="flex items-center">
        <img
          src={dashboardLogo}
          alt="main-icon"
          className="w-28 h-28 scale-150"
        />
        <button
          onClick={() => navigate("/dashboard")}
          className="font-medium text-3xl btn btn-ghost"
        >
          School Student's Portal
        </button>
      </div>
      <details className="dropdown dropdown-bottom dropdown-end">
        <summary className="m-1 btn btn-ghost">
          <RiMenuLine fontSize={30} />
        </summary>
        <ul className="p-2 shadow-2xl menu dropdown-content z-[1] bg-base-100 mt-2 rounded-box w-96 max-[399px]:w-52 h-max">
          {NAVBAR_DATA.map((item) => (
            <li
              key={item.id}
              className="py-2 text-[17px] max-[399px]:text-sm max-[399px]:p-0"
            >
              <Link to={item.url} className=" text-black">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
