import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosCloseCircle } from "react-icons/io";

export default function Header({ cEmail, cPhone, cName, userList }) {
  //props Object = {  cEmail:"pradeep@wscubetech.com",cPhone:8888888,cName:"WsCubetech" }

  // console.log(props);
  console.log(userList);
  let [modalStatus, setModalStatus] = useState(false);

  return (
    <>
    
        <div className={`lg:w-[400px] duration-1000 shadow-lg bg-white  fixed left-[50%]  translate-x-[-50%] translate-y-[-50%] ${modalStatus ? 'top-[50%]' :  'top-[-1000px]' }    `}>
          <h3 className="font-bold p-3">
            Enquire Now{" "}
            <span onClick={()=>setModalStatus(false)} className="absolute right-2 text-2xl">
              {" "}
              <IoIosCloseCircle />{" "}
            </span>
          </h3>
          <form action="" className="p-3">
            <div className="mb-3">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="w-full border-1 h-[30px]"
                name=""
                id=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="w-full border-1 h-[30px]"
                name=""
                id=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                className="w-full border-1 h-[30px]"
                name=""
                id=""
              />
            </div>
            <div className="mb-3">
              <button>Enquire Now</button>
            </div>
          </form>
        </div>
    

      <nav className="bg-neutral-primary bg-white sticky top-0 w-full z-20  start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              {cName} | {cEmail} | {cPhone}
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={'/price'}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact-us"}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
               <li>
                  <button onClick={()=>setModalStatus(true)}>Enquire Now</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
