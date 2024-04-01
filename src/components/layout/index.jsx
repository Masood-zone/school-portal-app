import React from "react";
import { Outlet } from "react-router-dom";
import Navbar, { MobileNav } from "../navbar";

function Layout() {
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
      <div className="flex-1 rounded-lg max-[999px]:rounded-none">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
