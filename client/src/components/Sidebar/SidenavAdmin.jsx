import React from 'react'
import {Link } from 'react-router-dom'

function SidenavAdmin() {
  return (
    <div className="py-8 w-full flex flex-col justify-center items-center">
    {/* list of pages */}
        <div className="p-6">
            <Link to="/dashboard/admin">Overview</Link>
        </div>
        <div className="p-6">
            <Link to="/dashboard/admin/verify">Verify</Link>
        </div>
  </div>
  )
}

export default SidenavAdmin