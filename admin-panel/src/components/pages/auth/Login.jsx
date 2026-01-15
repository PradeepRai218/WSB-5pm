import React from 'react'
import { useNavigate } from 'react-router'

export default function Login() {

   let navigate =useNavigate()
    let login=(e)=>{
        e.preventDefault()
        navigate('/dashboard')
    }

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>
            
            <form onSubmit={login} className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                    Sign In
                </button>
            </form>
            
            <p className="text-center text-gray-600 text-sm mt-4">
                Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
            </p>
        </div>
    </div>
    </div>
  )
}
