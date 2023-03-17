import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";

import Sidenav from "../components/Sidebar/Sidenav";
import Navbar from "../components/Navbar/Navbar";

function Cart() {
  const { cart, removeProductFromCart, user } = useUserContext();
  const [confirmed, setConfirmed] = React.useState([]);
  const [total,setTotal]= useState(0) ;
  useEffect(() => {
    const total = cart.products.reduce((prev, c) => {
      return prev + parseInt(c.price);
    }, 0);
    setTotal(total)
  }, []);
  console.log(user);

  const confirmHandler = (id) => {
    setConfirmed([...confirmed, id]);
  };

  const classOnConfirmed = (id) => {
    return confirmed.some(id);
  };

  return (
    <div className="min-h-screen flex flex-col font-Gilroy">
      <div className="flex-1 grid grid-cols-12 min-w-full pr-16">
        <div className="col-span-3 flex flex-col items-center bg-[#F1F1F1] ">
          <div className="py-8 w-full flex justify-center font-Belgant-Aesthetic">
            <div>
              <Link to="/">Multivendos+</Link>
            </div>
          </div>
          <Sidenav />
        </div>
        <div className="col-span-9 flex flex-col bg-[#FFFFFF]">
          {/* nav */}
          <div className="flex h-15 justify-between px-4 pt-5">
            <div>
              {/* <div className="text-[1.3rem]">Item name</div>
              <div className="text-[0.9rem] font-bold">Brand name</div> */}
            </div>

            <div className="flex flex-1">
              <div className="px-4 pl-28 py-2 flex-1 ">
                <input className="pl-4 text-lg w-full h-full rounded-[99999px] border-2 py-3 outline-none" />
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-black cursor-pointer">
              <Link to={`/user/profile`}>
                <img className="w-16 h-16 rounded-full" src={user?.avatar} />
              </Link>
            </div>
          </div>
          {/* nav end */}

          {/* content */}
          <div className="px-4 pl-14 font-extrabold text-lg">
            <h1>Cart</h1>
          </div>
          <div className="flex-1 grid grid-cols-12">
            <div className="col-span-8 flex flex-col">
              <div className="flex flex-col">
                {cart?.map((product) => {
                  return (
                    <div className="py-2 px-6">
                      <div className="w-full h-36 bg-[#D9D9D9] rounded-lg p-4 flex">
                        <div className="pr-2">
                          <h1>Title: {product.name},</h1>
                        </div>
                        <div>
                          <h1>Price: {product.price}</h1>
                        </div>
                        {/* <div className="flex">
                        {product.images.map(i => {
                          return <img src={i.download_url} />
                        })}
                      </div> */}
                        <div className="items-end ml-auto flex flex-col h-full justify-between">
                          <button
                            onClick={() => {
                              removeProductFromCart(product._id);
                              alert("Product removed.");
                            }}
                            className="py-3 px-8 bg-[#04151F] text-white rounded-lg"
                          >
                            Remove Item{" "}
                          </button>
                          {/* <button 
                        onClick={() => {removeProductFromCart(product._id)
                        alert("Product removed.")}}
                        className={`py-3 px-8 text-white rounded-lg bg-blue-600`}>Confirm</button> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-4">
              <div className="px-6">
                <div className="w-full bg-[#D9D9D9] rounded-xl pb-4">
                  <div className="flex flex-col p-4">
                    <div className="py-2  flex">
                      <input
                        value={total}
                        className="w-full rounded-xl border-b-2 py-2"
                        type="text"
                        disabled
                      />
                    </div>
                    {/* <div className="py-2 w-full flex">
                      <input className="w-full rounded-xl border-b-2 py-2" type="text" disabled/>
                    </div> */}
                  </div>
                  {/* <div className="flex flex-col py-1 px-4">Sub total</div> */}
                  <div className="flex flex-col px-4">Total : Rs. {total}</div>
                  <div className="flex flex-col px-4 mt-auto">
                    <button
                      className="py-3 px-6 bg-green-300 mb-1 rounded-lg"
                      disabled
                    >
                      Checkout
                    </button>
                    {/* <button className="py-3 px-6 bg-green-300 rounded-xl">
                      Something
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
