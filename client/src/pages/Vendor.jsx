import React from 'react'
import {Link} from 'react-router-dom'

import Navbar from "../components/Navbar/Navbar";

function Vendor() {
  return (
    <div className="min-h-screen overflow-hidden flex w-full items-start ">
    <div className="w-full mt-10 ">
      <Navbar />
      <div className="py-8 border-[#c9c9c9] border-y-[1px] flex justify-center gap-20 mt-20">
        <Link to='/dashboard/vendor'>
        <div className="text-xl border-b-[1px] px-2 border-slate-400 cursor-pointer">
          Vendor Dashboard
        </div>
        </Link>
        <Link to='/catlog'>
        <div  className="text-xl border-b-[1px] px-2 border-slate-400 cursor-pointer">
          Catalog
        </div>
        </Link>
      </div>
      <div className="flex justify-center">
      </div>
    </div>
  </div>
  )
}

export default Vendor