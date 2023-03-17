import { Link } from "react-router-dom";
import React from "react";

import Sidenav from "../../../components/Sidebar/SidenavAdmin";

function AdminOverview() {
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
          <div className="w-full flex flex-col ">
          <div className="w-full flex flex-1 flex-col  pt-6 pl-4">
                <div className="text-2xl font-bold">
                    <h1>Overview</h1>
                </div>
                <div className="pt-2">
                    <div>
                        <h1 className="text-xl font-extrabold">Details</h1>
                    </div>
                    <div>
                        Name: "ASdas"
                    </div>
                    <div>
                        Brands:
                        <div>
                            asdas
                        </div>
                    </div>
                </div>
          </div>
          </div>
            {/* end content */}
        </div>
        </div>
      </div>
  );
}

export default AdminOverview;
