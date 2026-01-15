import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function () {
  return (
    <div>
      <main className="bg-gray-50 text-gray-800">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              We build beautiful, accessible web experiences focused on
              performance, usability, and scalability.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded with a passion for elegant code and delightful UX, we
              partner with clients to ship products users love.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Meet the Team</h3>
            <p className="text-gray-600 mt-2">
              A small cross-functional team of designers and engineers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl font-bold mb-4">
                JS
              </div>
              <h4 className="font-semibold">Jamie Smith</h4>
              <p className="text-sm text-gray-500">Frontend Engineer</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold mb-4">
                AR
              </div>
              <h4 className="font-semibold">Aria Reynolds</h4>
              <p className="text-sm text-gray-500">Product Designer</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl font-bold mb-4">
                MK
              </div>
              <h4 className="font-semibold">Maya Khan</h4>
              <p className="text-sm text-gray-500">Backend Engineer</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xl font-bold mb-4">
                DL
              </div>
              <h4 className="font-semibold">Daniel Lee</h4>
              <p className="text-sm text-gray-500">DevOps</p>
            </div>
          </div>
        </section>
      </main>
    
    </div>
  );
}
