import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useUserContext } from "../../../context/UserContext";
import Sidenav from "../../../components/Sidebar/SidenavVendor";
import axios from "axios";

function VendorAdd() {
  const [sizes, setSizes] = useState([0]);
  const [categories, setCategories] = useState([]);
  const dataForm = useRef(null);
  const {user} = useUserContext() ;
  const getAllCat = async () => {
    const res = await axios.get("http://localhost:4269/api/product/category");
    // console.log(res.data);
    if (res.status === 200) {
      setCategories(res.data);
    }
  };
  useEffect(() => {
    getAllCat();
  }, []);

  const submitHandler = async (e) => {
    console.log(e);
    e.preventDefault();
    const formData = new FormData(dataForm.current);

    try {
      const res = await axios.post(
        "http://localhost:4269/api/product/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status == 200) {
        alert("Added");
        window.location.replace("/dashboard/vendor/products");
      }
    } catch (error) {
      console.log(error);
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
            <form ref={dataForm} onSubmit={submitHandler} className="w-full">
              <div className="pt-6 px-8">
                <label htmlFor="name">Name:</label>
                <input
                  className="w-full py-3 rounded-xl pl-2"
                  name="name"
                  type="text"
                />
              </div>
              <div className="pt-6 px-8">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="w-full py-3 rounded-lg px-2"
                  name="description"
                  type="text"
                />
              </div>
              <div></div>
              <div className="pt-6 px-8">
                <label htmlFor="brand">Brand:</label>
                <input
                  className="w-full py-3 rounded-xl pl-2"
                  name="brand"
                
                  value={user?.brand}
                  type="text"
                />
              </div>
              <div className="pt-6 px-8">
                <label htmlFor="price">Price:</label>
                <input
                  className="w-full py-3 rounded-xl pl-2"
                  name="price"
                  type="text"
                />
              </div>
              <div className="pt-6 px-8">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  className="w-full py-3 rounded-xl pl-2"
                  min={0}
                  name="quantity"
                  type="number"
                />
              </div>
              <div>
                {sizes.map((s) => (
                  <div key={s} className="pt-6 px-8">
                    <label>Size</label>
                    <input
                      className="w-full py-3 rounded-xl pl-2"
                      name="size"
                      type="text"
                    />
                  </div>
                ))}
                <div className="flex">
                  <div
                    onClick={() => setSizes([...sizes, sizes.length + 1])}
                    className="px-5 py-2 bg-slate-600 ml-8 mt-8 text-white rounded-md"
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="pt-6 px-8">
                <label>Image</label>
                <input
                  className="w-full py-3 rounded-xl pl-2"
                  name="file"
                  type="file"
                />
              </div>
              <div className="pt-6 px-8">
                <label htmlFor="category">Category:</label>
                <select
                  className="w-full  py-3 rounded-xl pl-2"
                  name="category"
                >
                  {categories.map((cat) => (
                    <option value={cat._id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="pt-6 w-full flex justify-center pb-6">
                <button className="px-8 py-2 bg-gray-400 rounded-lg">
                  Add Product
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

export default VendorAdd;
