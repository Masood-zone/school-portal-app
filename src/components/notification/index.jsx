import React from "react";
import { notificationLogo } from "../../assets/svgs";

function Notification() {
  return (
    <div className="w-[45px]">
      <img src={notificationLogo} alt="notification-icon" className="w-full" />
    </div>
  );
}

export default Notification;
