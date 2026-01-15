import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home.jsx";
import Aboutus from "./components/pages/Aboutus.jsx";
import Services from "./components/pages/Services.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Error404 from "./components/pages/Error404.jsx";
import Contactus from "./components/pages/Contactus.jsx";
import MainLayout from "./components/common/MainLayout.jsx";
import Price from "./components/pages/Price.jsx";
import Login from "./components/pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* http://localhost:5173/ */}
        {/* {
          /
        } */}
        <Route element={<MainLayout/>}>
          <Route path={"/"} element={<Home />} />
          {/* http://localhost:5173/about-us */}
          <Route path={"/about-us"} element={<Aboutus />} />

          <Route path={"/services"} element={<Services />} />

            <Route path={"/price"} element={<Price />} />

          <Route path={"/contact-us"} element={<Contactus />} />

          <Route path={"*"} element={<Error404 />} />
        </Route> 
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
