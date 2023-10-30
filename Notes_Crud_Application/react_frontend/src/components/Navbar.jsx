import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-950 text-white sticky top-0 p-3'>
      <div className="flex justify-between  items-center">
        <div className="logo text-xl ml-10 cursor-default tracking-widest">
            YooSer
        </div>
        <div className="list flex justify-center items center mr-20 space-x-10">
            <Link className='hover:underline-offset-[7px] duration-500 hover:underline' to="/">Home</Link>
            <Link className='hover:underline-offset-[7px] duration-500 hover:underline' to="/add">Add Note</Link>
            <Link className='hover:underline-offset-[7px] duration-500 hover:underline' to="/view">View Note</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
