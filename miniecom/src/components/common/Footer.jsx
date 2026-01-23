import React, { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MyGlobalContext } from "../context/MainContextFile";

export default function Footer() {
 let {cart,setCart} = useContext(MyGlobalContext)


  return (
    <footer className="bg-primary-color py-10">
     
      <button onClick={()=>setCart(cart-1)}>ChangeCart</button>
      <div className="max-w-[1320px] mx-auto grid grid-cols-[30%_20%_20%_auto]">
        <div className="py-10">
          <h2 className="text-[22px] font-semibold text-white mb-5">
            {" "}
            About Surana Realtors
          </h2>
          <p className="text-white text-[18px] leading-7">
            Proudly radiating the power of undaunted success since 1987, Surana
            realtors has established its stature as one of Rajasthan’s finest
            realtors.
          </p>

          <div className="mt-6 flex gap-4">
            <button className=" text-white w-[30px] h-[30px] border-1 border-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#fff] hover:text-primary-color duration-100">
              <FaFacebookF />
            </button>
            <button className=" text-white w-[30px] h-[30px] border-1 border-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#fff] hover:text-primary-color duration-100">
              <FaInstagram />
            </button>
            <button className=" text-white w-[30px] h-[30px] border-1 border-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#fff] hover:text-primary-color duration-100">
              <FaInstagram />
            </button>
            <button className=" text-white w-[30px] h-[30px] border-1 border-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#fff] hover:text-primary-color duration-100">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
