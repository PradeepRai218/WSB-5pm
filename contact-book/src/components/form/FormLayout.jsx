import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export default function FormLayout({enquiry,setEnquiry}) {

  
  let saveEnquiry=(e)=>{
    e.preventDefault() //Page 
    let obj={
        name:e.target.name.value,
        email:e.target.email.value,
        phone:e.target.phone.value
    }
    
    setEnquiry([...enquiry,obj])
    e.target.reset()
    toast.success("Data Save")
   
 
   
  }  
  
  return (
    <div className="min-h-full">
        <ToastContainer/>
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">Add Contact</h2>
        <p className="text-sm text-slate-500 mb-6">
          Enter the contact details below.
        </p>

        <form  onSubmit={saveEnquiry} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
             
              placeholder="John Doe"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
             
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
             
              placeholder="+1 555 000 1234"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Save Contact
          </button>
        </form>
      </div>
    </div>
  )
}
