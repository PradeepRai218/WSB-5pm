import React, { createContext, useEffect, useState } from "react";

export let MyGlobalContext = createContext(); //Provider

export default function MainContextFile({ children }) {
  let [cart, setCart] = useState(
    localStorage.getItem("CART")
      ? JSON.parse(localStorage.getItem("CART"))
      :
      []
  );



  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);

    let obj = { cart, setCart };

  return (
    <MyGlobalContext.Provider value={obj}>{children}</MyGlobalContext.Provider>
  );
}
