import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidenav from "../../../components/Sidebar/SidenavVendor";
import { useUserContext } from "../../../context/UserContext";
function VendorProducts() {
  const [products, setProducts] = useState([]);
  const { user } = useUserContext();
  const getProductByBrand = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4269/api/product/all/${user.brand}`
      );
      if (res.status == 200) {
        setProducts(res.data.product);
      } 
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductByBrand() ;
  }, []);
  return (
    <div className="min-h-screen flex flex-col font-Gilroy">
      <div className=" flex-1 grid grid-cols-12 min-w-full bg-[#F1F1F1] ">
        <div className="col-span-3 flex  flex-col items-center">
          <div className="py-8 w-full flex justify-center font-Belgant-Aesthetic">
          <Link to="/">Multivendos+</Link>
          </div>
          <Sidenav />
        </div>

        <div className="col-span-9 flex flex-col px-5 bg-[#ffffff]">
          {/* nav */}

          <div className="flex h-15 justify-between px-4 pt-5">
            <div>
              <div className="text-[1.3rem]">Item name</div>
              <div className="text-[0.9rem] font-bold">Brand name</div>
            </div>

            <div className="flex flex-1">
              <div className="px-4 pl-28 py-2 flex-1">
                <input className="pl-4 text-lg w-full h-full rounded-[99999px] border-2 py-3 outline-none" />
              </div>
            </div>
          </div>

          {/* <div className="flex h-15 justify-between px-4">
            <div>
                <div className="text-[1.3rem]">Item name</div>
                <div className="text-[0.9rem] font-bold">Brand name</div>
            </div>
            <div> Search bar</div>
            <div>Profile Circle</div>
          </div> */}
          {/* nav end */}

          {/* content */}
          <div className="w-full flex flex-wrap ml-auto">
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
            <div className="w-60 h-80 bg-blue-300 mx-2 my-2"></div>
          </div>
          {/* end content */}
        </div>
      </div>
    </div>
  );
}

export default VendorProducts;
