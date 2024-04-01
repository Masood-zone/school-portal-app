import React from "react";

function Banner({ data }) {
  return (
    <div className="w-full p-10 rounded-2xl bg-[#901AD8] text-white mt-8">
      <h1 className="text-[30px] font-[600]">Welcome back, {data?.fullname}</h1>
      <p className="text-[14px] font-light">
        Always stay updated in your student portal
      </p>
    </div>
  );
}

export default Banner;
