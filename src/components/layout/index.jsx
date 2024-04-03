import React from "react";
import { Outlet } from "react-router-dom";
import Navbar, { MobileNav } from "../navbar";
import SearchBar from "../searchbar";
import Avatar from "../avatar";
import { resetData } from "../../reduxApp/slices/student/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../notification";

function Layout() {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.student);

  const onResetData = () => {
    dispatch(resetData());
  };
  return (
    <main className="w-screen h-screen flex py-5 px-10 gap-6 max-[999px]:p-0 max-[999px]:gap-0 max-[999px]:flex-col">
      {/* Main Nav */}
      <div className="max-[999px]:hidden">
        <Navbar />
      </div>
      {/* Mobile Nax */}
      <div className="min-[999px]:hidden">
        <MobileNav />
      </div>
      <div className="flex-1 rounded-lg max-[999px]:rounded-none flex-col overflow-y-scroll overflow-hidden">
        <div className="w-full min-[1024px]:w-[680px] min-[1300px]:w-[1150px] max-[299px]:w-[200px] flex justify-between items-center py-1 px-2 max-[999px]:rounded-none fixed bg-[#e8e8e8]">
          {/* Search bar */}
          <SearchBar />
          <div className="flex items-center gap-5 flex-row-reverse p-1 absolute right-0 max-xl:mx-4">
            {/* Avatar icon */}
            <Avatar data={student} onLogout={onResetData} />
            {/* Notification icon */}
            <Notification />
          </div>
        </div>
        <div className="mt-16">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default Layout;
