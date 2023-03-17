import React from 'react'
import {Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className="py-8 w-full flex flex-col justify-center items-center">
    {/* list of pages */}
    {/* <div className="p-6">
      <Link to="/">Home</Link>
    </div> */}
    <div className="p-6">
      <Link to="/catlog">Catalog</Link>
    </div>
    <div className="p-6">
    <Link to="/cart">Cart</Link>
    </div>
  </div>
  )
}

export default Sidenav