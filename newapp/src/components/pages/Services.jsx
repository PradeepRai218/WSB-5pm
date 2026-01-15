import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Services() {
  return (
    <div>
      
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What we offer</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">High-quality solutions tailored to your needs.</p>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-md mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3zM12 5a4 4 0 110 8 4 4 0 010-8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Custom Development</h3>
                        <p className="mt-2 text-gray-600">Build scalable web apps using modern frameworks and best practices.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-md mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 10h4l3 8 4-16 3 8h4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">UI/UX Design</h3>
                        <p className="mt-2 text-gray-600">Design intuitive interfaces and user journeys that convert.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-md mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6M7 21h10" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Consulting</h3>
                        <p className="mt-2 text-gray-600">Technical strategy, architecture reviews and team guidance.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-md mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3H8l-1 4h10l-1-4z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">E-commerce</h3>
                        <p className="mt-2 text-gray-600">Fast, secure online stores with smooth checkout experiences.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-md mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3.866 0-7 1.79-7 4v3h14v-3c0-2.21-3.134-4-7-4zM12 4a4 4 0 110 8 4 4 0 010-8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Maintenance & Support</h3>
                        <p className="mt-2 text-gray-600">Ongoing updates, monitoring and quick issue resolution.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-md mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-5a4 4 0 00-4-4H7a4 4 0 00-4 4v5z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">API & Integrations</h3>
                        <p className="mt-2 text-gray-600">Connect systems reliably with well-documented APIs.</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">Get Started</a>
                </div>
            </div>
        </section>

     
    </div>
  )
}
