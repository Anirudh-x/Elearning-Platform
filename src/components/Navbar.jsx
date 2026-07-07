import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-18 w-screen text-white bg-gray-700 flex justify-center items-center gap-14'>

      <Link to="/" className='border h-8 w-16 flex justify-center items-center rounded-4xl hover:text-red-400 '>Home</Link>
      <Link to="/about" className='border h-8 w-16 flex justify-center items-center rounded-4xl'>About</Link>
      <Link to="/courses" className='border h-8 w-16 flex justify-center items-center rounded-4xl'>Courses</Link>
      <Link to="/contact" className='border h-8 w-16 flex justify-center items-center rounded-4xl'>Contact</Link>
    </div >
  )
}

export default Navbar