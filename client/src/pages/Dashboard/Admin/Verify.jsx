import { Link } from "react-router-dom";
import React from "react";

import Sidenav from "../../../components/Sidebar/SidenavAdmin";

function AdminVerify() {
  return (
    <div className="min-h-screen flex flex-col font-Gilroy">
      <div className="flex-1 grid grid-cols-12 min-w-full ">
        <div className="col-span-3 flex flex-col items-center bg-[#F1F1F1] ">
          <div className="py-8 w-full flex justify-center font-Belgant-Aesthetic">
            <div><Link to="/">Multivendos+</Link></div>
          </div>
          <Sidenav />
        </div>
        <div className="col-span-9 flex flex-col bg-[#FFFFFF] items-center">

          {/* content */}
          <div className="w-full flex flex-1 flex-col  pt-6 pl-4">
                <div className="text-2xl font-bold">
                    <h1>Verify</h1>
                </div>

                <div className="w-full pt-12">
                    <div>
                        <h1 className="text-xl font-extrabold">Vendor Requests</h1>
                    </div>
                    <div className="w-full px-8 pt-2">
                        <div className="w-full h-48 bg-gray-300 rounded-2xl flex p-4">
                            <div>Name</div>
                        </div>
                        </div>
                        <div className="w-full px-8 pt-2">
                        <div className="w-full h-48 bg-gray-300 rounded-2xl "> </div>
                        </div>
                        <div className="w-full px-8 pt-2">
                        <div className="w-full h-48 bg-gray-300 rounded-2xl"> </div>
                        </div>
                        <div className="w-full px-8 pt-2">
                        <div className="w-full h-48 bg-gray-300 rounded-2xl"> </div>
                    </div>
                </div>
          </div>
            {/* end content */}
        </div>
        </div>
      </div>
  );
}

export default AdminVerify;
