import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./components/pages/Home.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
let root = document.getElementById("root");
createRoot(root).render(
  <>
    <Header/>
    <Home />
    <Footer></Footer>
 
  </>
);
