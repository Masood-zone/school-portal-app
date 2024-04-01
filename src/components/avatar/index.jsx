import React from "react";

function Avatar({ data, onLogout }) {
  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="btn btn-ghost btn-circle ">
        <div className="avatar">
          <div className="offline w-[45px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-full h-full "
              alt="avatar-icon"
            />
          </div>
        </div>
      </button>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-72"
      >
        <li className="my-2">
          <div className="text-base-content flex flex-col items-start justify-start">
            <div className="font-bold">
              <span>{data?.fullname}</span>
            </div>
            <div className="text-base">
              <span>{data?.indexNumber}</span>
            </div>
          </div>
          <li className="my-2 py-2 text-red-500 ">
            <button className="" onClick={onLogout}>
              Logout
            </button>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Avatar;
