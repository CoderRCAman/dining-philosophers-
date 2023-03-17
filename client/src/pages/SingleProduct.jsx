import { Link, useParams } from "react-router-dom";
import React from "react";
import { useUserContext } from "../context/UserContext";

import Sidenav from "../components/Sidebar/Sidenav";
import Navbar from "../components/Navbar/Navbar";

function SingleProduct() {
  const { cart, removeProductFromCart, user, addProductToCart } =
    useUserContext();
  const [confirmed, setConfirmed] = React.useState([]);

  const params = useParams();
  console.log(params);

  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:4269/api/product/${params.id}`);
      const data = await res.json();
      console.log(data);
      if (data.product) {
        setProduct({ ...data.product });
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-Gilroy">
      <div className="flex-1 grid grid-cols-12 min-w-full pr-16">
        <div className="col-span-3 flex flex-col items-center bg-[#F1F1F1] ">
          <div className="py-8 w-full flex justify-center font-Belgant-Aesthetic">
            <Link to="/">Multivendos+</Link>
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
            <div className="relative px-2">
              <Link to={"/cart"}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 86 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_18_321)">
                    <path
                      d="M64.4999 19.25H57.3333C57.3333 12.1596 50.9191 6.41669 42.9999 6.41669C35.0808 6.41669 28.6666 12.1596 28.6666 19.25H21.4999C17.5583 19.25 14.3333 22.1375 14.3333 25.6667V64.1667C14.3333 67.6959 17.5583 70.5834 21.4999 70.5834H64.4999C68.4416 70.5834 71.6666 67.6959 71.6666 64.1667V25.6667C71.6666 22.1375 68.4416 19.25 64.4999 19.25ZM35.8333 32.0834C35.8333 33.8479 34.2208 35.2917 32.2499 35.2917C30.2791 35.2917 28.6666 33.8479 28.6666 32.0834V25.6667H35.8333V32.0834ZM42.9999 12.8334C46.9416 12.8334 50.1666 15.7209 50.1666 19.25H35.8333C35.8333 15.7209 39.0583 12.8334 42.9999 12.8334ZM57.3333 32.0834C57.3333 33.8479 55.7208 35.2917 53.7499 35.2917C51.7791 35.2917 50.1666 33.8479 50.1666 32.0834V25.6667H57.3333V32.0834Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_321">
                      <rect width="86" height="77" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div className="bg-cyan-600 absolute top-0 right-0 z-10 h-5 w-5 text-sm flex items-center justify-center text-white text-center rounded-full">
                {cart?.length || 0}
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
          {product && (
            <>
              <div className="px-4 pl-14 font-extrabold text-lg">
                <h1>{product && product.name}</h1>
              </div>
              <div className="flex-1 grid grid-cols-12">
                <div className="col-span-8 flex flex-col">
                  <div className="flex p-4">
                    <div className="w-64 h-80 flex justify-center items-center border-2">
                      <img src={product && product.images[0].download_url} />
                    </div>
                    <div className="flex p-6 flex-col h-full">
                      <div className="flex">
                        <div>
                          <h1 className="text-3xl font-bold">
                            {product && product.name}
                          </h1>
                          <h1 className="text-2xl italic">
                            Rs. {product && product.price}{" "}
                          </h1>
                        </div>
                        <div className="pl-8">
                          <div className="text-xs ">description:</div>
                          <div className="pl-4 text-xl">
                            <p>{product.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="py-8">
                        {product.images.map((i) => {
                          return (
                            <div className="w-18 h-18 border-1">
                              <img
                                className="w-18 h-18"
                                src={i.download_url}
                                width="60px"
                                height="60px"
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-auto ">
                        <button
                          onClick={() => {
                            addProductToCart({ ...product });
                            alert("Product added to cart.");
                          }}
                          className="px-8 py-3 bg-green-500 rounded-xl"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
