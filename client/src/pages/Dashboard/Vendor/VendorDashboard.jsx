import { Link } from "react-router-dom";
import React from "react";

import Sidenav from "../../../components/Sidebar/SidenavVendor";

import imageVendor from "../../../assets/vendor-banner_1.png"

function VendorDashboard() {
  return (
    <div className="min-h-screen flex flex-col font-Gilroy">
      <div className="flex-1 grid grid-cols-12 min-w-full">
        <div className="col-span-3 flex flex-col items-center bg-[#F1F1F1] ">
          <div className="py-8 w-full flex justify-center font-Belgant-Aesthetic">
          <Link to="/">Multivendos+</Link>
          </div>
          <Sidenav />
        </div>
        <div className="col-span-9 flex flex-col bg-[#FFFFFF]">
          {/* nav */}
          {/* <div className="flex h-15 justify-between px-4 pt-5">
            <div>
              <div className="text-[1.3rem]">Item name</div>
              <div className="text-[0.9rem] font-bold">Brand name</div>
            </div>

            <div className="flex flex-1">
              <div className="px-4 pl-28 py-2 flex-1 ">
                <input className="pl-4 text-lg w-full h-full rounded-[99999px] border-2 py-3 outline-none" />
              </div>
            </div>
            <div className="flex w-16">
              <div className="w-full h-full rounded-[50%] bg-black"></div>
            </div>
          </div> */}
          {/* nav end */}

          {/* content */}
          {/* <div className="flex flex-wrap items-start mr-auto ml-auto">
            <div className="px-3 pt-2">
              <div className="w-72 h-32 bg-[#D9D9D9] rounded-lg flex justify-center items-center">
                    <div class="relative w-20 h-20 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D9D9D9] rounded-full border-white"></div>
                </div>
                <div className="pl-2">
                    <h1>2023 New Orders Today</h1>
                </div>
              </div>
            </div>
            <div className="px-3 pt-2">
              <div className="w-72 h-32 bg-[#D9D9D9] rounded-lg flex justify-center items-center">
                    <div class="relative w-20 h-20 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D9D9D9] rounded-full border-white"></div>
                </div>
                <div className="pl-2">
                    <h1>2023 New Orders Today</h1>
                </div>
              </div>
            </div>
            <div className="px-3 pt-2">
              <div className="w-72 h-32 bg-[#D9D9D9] rounded-lg flex justify-center items-center">
                    <div class="relative w-20 h-20 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D9D9D9] rounded-full border-white"></div>
                </div>
                <div className="pl-2">
                    <h1>2023 New Orders Today</h1>
                </div>
              </div>
            </div>
            {/* <div className="px-3 pt-2">
              <div className="w-56 h-56 bg-[#D9D9D9] rounded-lg p-6"></div>
            </div>
          </div> */}
          
          <div className="pt-8 px-4">
            <div 
            style={{backgroundImage: `url(${imageVendor.src})`}}
            className="w-full h-56 bg-[#D9D9D9] rounded-lg p-6 text-4xl flex flex-col item-center justify-center pl-16">
                <div>
                <h1>You are doing great</h1>
                <span className="text-4xl font-bold">Vendor</span>
                    </div>
               <div>
                <span className="text-xl">Keep it up!</span>
               </div>
            </div>
          </div>

          <div className="pl-4 flex overflow-x-scroll pt-8 pb-2 pr-4">
            <div className="pr-8">
                <div>
                    Orders Tracker
                </div>
                <div>
                    <div className="h-56 bg-[#D9D9D9] rounded-lg p-6 text-4xl items-center flex justify-evenly">
                        <div className="px-16 border-r-4">12 <h1 className="text-sm">New Orders</h1></div>
                        <div className="px-16 border-r-4">8 <h1 className="text-sm">In Progress</h1></div>
                        <div className="px-16 border-r-4">13<h1 className="text-sm">Shipped</h1></div>
                        <div className="px-16">3 <h1 className="text-sm">Failed</h1></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Top Products
                </div>
                <div>
                    <div className=" h-56 bg-[#D9D9D9] rounded-lg p-6 text-4xl items-center flex justify-evenly">
                        <div className="px-16 border-r-4">12</div>
                        <div className="px-16 border-r-4">8</div>
                        <div className="px-16 border-r-4">13</div>
                        <div className="px-16">3</div>
                    </div>
                </div>
            </div>
          </div>

        <div className="px-4 flex pt-8 flex-col">
            <div>
                <h1>Recent Orders</h1>
            </div>
            <div className="w-full flex flex-col">
                <div className="h-36 bg-gray-500 pt-8 mt-3 rounded-xl"></div>
                <div className="h-36 bg-gray-500 pt-8 mt-3 rounded-xl"></div>
                <div className="h-36 bg-gray-500 pt-8 mt-3 rounded-xl"></div>
                <div className="h-36 bg-gray-500 pt-8 mt-3 rounded-xl"></div>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
