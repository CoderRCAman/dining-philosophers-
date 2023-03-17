import { Link } from "react-router-dom";
import React, { useState } from "react";

import Sidenav from "../../../components/Sidebar/SidenavVendor";
import axios from "axios";

function VendorCategory() {
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("dfkfkhk");
    const res = await axios.post("http://localhost:4269/api/product/category", {
      name: name,
    });
    if (res.status == 200) {
      alert("Added!");
    } else {
      alert("Something went wrong!");
    }
  };
  return (
    <div className="min-h-screen flex flex-col font-Gilroy">
      <div className="flex-1 grid grid-cols-12 min-w-full ">
        <div className="col-span-3 flex flex-col items-center bg-[#F1F1F1] ">
          <div className="py-8 w-full flex justify-center font-Belgant-Aesthetic">
          <Link to="/">Multivendos+</Link>
          </div>
          <Sidenav />
        </div>
        <div className="col-span-9 flex flex-col bg-[#FFFFFF] items-center">
          {/* content */}
          <div className="w-[70%] bg-gray-200 flex flex-col justify-center items-center mt-16 rounded-lg shadow-md pt-6">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="pt-6 px-8">
                <label htmlFor="name">Name:</label>
                <input
                  className="w-full py-3 rounded-xl pl-2"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="pt-6 w-full flex justify-center pb-6">
                <button
                  className="px-8 py-2 bg-gray-400 rounded-lg"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
          {/* end content */}
        </div>
      </div>
    </div>
  );
}

export default VendorCategory;
