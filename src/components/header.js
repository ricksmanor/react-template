import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      {/* Header */}
      <header className="bg-black text-white py-4 flex flex-col items-center justify-center text-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4"><Link to="/">Template</Link></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <br />
        </div>

        <div className="w-1/2 flex justify-between flex-wrap">

          <Link to="/" className="text-gray-100   hover:underline hover:animate-pulse hover:text-red-700 hover:font-extrabold duration-500 text-lg">Home</Link>
          <Link to="/About" className="text-gray-100   hover:underline hover:animate-pulse hover:text-red-700 hover:font-extrabold duration-500 text-lg">About Us</Link>
          <Link to="/Contact" className="text-gray-100   hover:underline hover:animate-pulse hover:text-red-700 hover:font-extrabold duration-500 text-lg">Contact Us</Link>


        </div>
      </header>
    </div>
  )
}

export default Header