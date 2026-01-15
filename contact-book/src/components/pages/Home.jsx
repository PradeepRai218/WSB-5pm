import React, { useEffect, useState } from "react";
import FormLayout from "../form/FormLayout";
import DisplayList from "../form/DisplayList";

export default function Home() {
  let [enquiry, setEnquiry] = useState([]);
  let [count, setCount] = useState(1);
  let getCategory = () => {
    console.log("getCategory");
  };
  let getBrands = () => {
    console.log("Brands");
  };
  let getProducts = () => {
    console.log("Products");
  };

  useEffect(() => {
    getCategory();
    getBrands();
  }, []);

  useEffect(() => {
    getProducts();
  }, [enquiry,count]);

  //Blank Array ->

  return (
    <section className="py-10">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Change</button>
      <div className="grid grid-cols-[20%_auto] gap-10">
        <FormLayout enquiry={enquiry} setEnquiry={setEnquiry} />
        <DisplayList enquiry={enquiry} setEnquiry={setEnquiry} />
      </div>
    </section>
  );
}
