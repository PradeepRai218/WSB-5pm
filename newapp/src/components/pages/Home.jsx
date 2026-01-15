import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { product } from "../../Data/productData";

export default function Home() {
  let user = ["Pradeep", "John", "Doe", "Smith"];
   let [count,setCount]  =useState(10)

   let [password,setPassword]=useState(false)

  let email="pradeep@wscubetech.com"
 
  let changeCount=()=>{
 
      setCount(count+1)
    
  }

  let addData=(n,m)=>{
    alert(n+m)
  }
  console.log(password);
  

  return (
    <div>
      
   
       <div className="max-w-desktop border-1 py-10 mx-auto">
            <input className=" border-1 " type={ password ? "text" : "password"} />
            <button onClick={()=> setPassword( ! password  ) }>
              {
                password ? <FaEyeSlash /> : <IoEyeSharp />
              }
            </button>
      </div>
      <h1 id="heading">{count}</h1>
       <button onClick={ ()=> addData(10,20)  } className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Me
      </button>

      <button onClick={ changeCount } className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Click Me
      </button>

      <button onClick={ ()=>{
        alert("Welcome")
      } }  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
         Click Me 2
      </button>

      <main className="pt-20">
        <section className="bg-neutral-primary  flex flex-col items-center justify-center">
          <h1 className="text-4xl text-heading font-bold">
            Welcome to the Home Page
          </h1>
          <p
            style={{ color: "red", fontSize: "25px" }}
            className="text-heading mt-4"
          >
            This is a simple home page layout using React and Tailwind CSS.
          </p>
        </section>
        <div>
          <div className="max-w-[1320px] gap-5 mt-10 mx-auto grid grid-cols-4">
            {product.map((obj, index) => {
              return (
                <div key={index} className="border-1 border-[#ccc] shadow-xs">
                  <img className="rounded-t-base" src={obj.thumbnail} alt="" />
                  <div className="p-3">
                    <h2 className="font-bold">{obj.title}</h2>
                    <p>{obj.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </main>

      <div className="max-w-[1320px] grid grid-cols-4 gap-5 mx-auto">
          {
            product.map((obj,index)=>{ //10
              return(
                //  <ProductItems  pName={obj.title} image={obj.thumbnail} text={obj.description}  />
                 <ProductItems  key={index}  data={obj} />
              )
            })
          }
      </div>

      
    </div>
  );
}

let ProductItems=({data})=>{
  //data Object
  let {thumbnail,title,description,price}=data

  return(
    <div className="border-1 border-[#ccc] shadow-xs">
          <img
            className="rounded-t-base"
            alt=""
            src={thumbnail}
          />
          <div className="p-3">
            <h2 className="font-bold"> {title} </h2>
            <p>
             {description}
            </p>
          </div>
        </div>
  )
}