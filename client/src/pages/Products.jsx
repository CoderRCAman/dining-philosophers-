import { Link } from "react-router-dom";
import React from "react";

function Products() {




  return (
    <div className="bg-[#F1F1F1] min-h-screen  ">
      <div className=" flex ">
        <div className=" flex w-60 border-r-4 flex-col items-center">
          <div className="py-8 w-full flex justify-center">
            <div><Link to="/">Multivendos+</Link></div>
          </div>
          <div className="py-8 w-full flex flex-col justify-center items-center">
            {/* list of pages */}
            <div className="p-6">
              <Link to="/">Home</Link>
            </div>
            <div className="p-6">
              <Link to="/products">Products</Link>
            </div>
            <div className="p-6">
              <Link to="/cart">Cart</Link>
            </div>
          </div>
        </div>
        <div className="flex font-Gilroy flex-col">
          {/* nav */}

          <div className="flex h-15 justify-between px-4 pt-5">
            <div>
              <div className="text-[1.3rem]">Item name</div>
              <div className="text-[0.9rem] font-bold">Brand name</div>
            </div>
            <div className="flex flex-1">
              <div className="px-4 pl-28 py-2  flex-1">
                <input className="w-full h-full  " />
              </div>
            </div>
            <div className="flex w-14">
              <div className="w-full h-full rounded-[50%] bg-black"></div>
            </div>
          </div>
          {/* nav end */}

          {/* content */}
          <div className="px-4">
            <h1>Products</h1>
          </div>
          <div className="flex-1 grid grid-cols-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
