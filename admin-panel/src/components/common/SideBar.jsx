import React from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { Link } from "react-router";

export default function SideBar() {
  return (
    <div className="h-screen bg-red-500 overflow-y-scroll">
      <img
        src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
        alt=""
      />
      <hr />
      <ul className="mt-10">
        <li>
          <Link className="flex items-center gap-2" to={"/dashboard"}>
            {" "}
            <RiDashboard3Line /> Dashboard{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
