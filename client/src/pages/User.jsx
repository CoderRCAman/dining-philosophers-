import { Link , useNavigate} from "react-router-dom";
import {useEffect} from "react"

import Navbar from "../components/Navbar/Navbar";

export default function User() {

  const navigation = useNavigate()

  return (
    <div className="min-h-screen overflow-hidden flex w-full items-start ">
      <div className="w-full mt-10 ">
        <Navbar />
        <div className="py-8 border-[#c9c9c9] border-y-[1px] flex justify-center gap-20 mt-20">
          <Link to='/catlog'>
          <div className="text-xl border-b-[1px] px-2 border-slate-400 cursor-pointer">
            catalog
          </div>
          </Link>
          {/* <Link to='/vendor/request'>
          <div  className="text-xl border-b-[1px] px-2 border-slate-400 cursor-pointer">
            Become a Vendor
          </div>
          </Link> */}
        </div>
        <div className="flex justify-center">
          <div className="pt-5">
            <button 
            onClick={() => {
              localStorage.removeItem("id");
              localStorage.removeItem("auth"),
              localStorage.removeItem("role"),
              window.location.replace("/");
            }}
            className="px-8 py-6 bg-red-500 rounded-xl text-white">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
