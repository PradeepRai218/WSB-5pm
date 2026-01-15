import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Header = () => {
  
   
  let [category, setCategory] = useState([]);

  let getCategory = async () => {
    let apiData = await fetch(
      `https://wscubetech.co/ecommerce-api/categories.php`
    );
    let finalData = await apiData.json();
    let { data } = finalData;
    setCategory(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <header className="hidden lg:block bg-[#F5F7FA] h-[72px]">
      <div className="px-6 py-4 relative">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" title="Surana Realtors" className="flex items-center">
            <img
              src="/images/surana-logo.png"
              alt="header-logo"
              className="h-[42px] w-auto"
            />
          </a>

          {/* Menu */}
          <ul className="flex items-center gap-2 xl:gap-3 ml-auto">
            <li className="px-3 py-2 text-sm text-gray-800 font-normal">
              <a href="/">Home</a>
            </li>

            <li className="px-3 py-2 text-sm text-gray-800">
              <a href="/about-us">About Us</a>
            </li>

            {/* Our Services */}
            <li className="relative group px-3 py-2 text-sm text-gray-800 cursor-pointer">
              <div className="flex items-center gap-1">
                <Link to={"/product"}> Products </Link>
              </div>

              {/* Dropdown */}
              <div className="absolute top-[100%]  left-0 hidden group-hover:block">
                <ul className="bg-white shadow-lg rounded-md min-w-[350px] h-[200px]  overflow-y-scroll p-4">
                  {category.map((obj, index) => {
                    return (
                      <li className="p-2 hover:bg-gray-100 rounded">
                        <Link to={`/product/${obj.slug}`}>
                           {obj.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            {/* Properties For */}
            <li className="relative group px-3 py-2 text-sm text-gray-800 cursor-pointer">
              <div className="flex items-center gap-1">Properties For</div>

              <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
                <ul className="bg-white shadow-lg rounded-md min-w-[246px] p-4">
                  <li className="p-2 hover:bg-gray-100 rounded">
                    <a href="/residential-property-jodhpur">Residential</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded">
                    <a href="/commercial-property-jodhpur">Commercial</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded">
                    <a href="/industrial-property-jodhpur">Industrial</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded">
                    <a href="/agricultural-property-jodhpur">Agricultural</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-3 py-2 text-sm text-gray-800">
              <a href="/rent-a-property">Rent a Property</a>
            </li>

            <li className="px-3 py-2 text-sm text-gray-800">
              <a href="/listed-properties">Listed Properties</a>
            </li>

            <li className="px-3 py-2 text-sm text-gray-800">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>

          {/* CTA Button */}
          <a href="/post-a-property?type=for_sale" className="ml-6">
            <button className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              <span>Post Property</span>

              <span className="text-xs bg-white text-blue-600 px-2 py-[2px] rounded">
                Free
              </span>
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
