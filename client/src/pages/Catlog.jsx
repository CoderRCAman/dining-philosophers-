import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";

import Navbar from "../components/Navbar/Navbar";

export default function Catlog() {
  const { addProductToCart } = useUserContext();
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:4269/api/product/all");
      const result = await res.json();

      console.log(result.data);
      setProducts(result.data);
    };

    fetchProducts();
  }, []);

  const handleAddingToCart = (data) => {
    addProductToCart(data);
    
    alert("Added to cart.");
  };

  return (
    <div className="min-h-screen overflow-hidden flex w-full items-start ">
      <div className="w-full mt-6 ">
        <Navbar />
        <div className="py-8 border-[#c9c9c9] border-y-[1px] flex justify-center gap-20 mt-20">
          <Link to="/product/man">
            <div className="text-xl border-b-[1px] px-2 border-slate-400 cursor-pointer">
              Man
            </div>
          </Link>
          <Link to="/product/women">
            <div className="text-xl border-b-[1px] px-2 border-slate-400 cursor-pointer">
              Women
            </div>
          </Link>
        </div>
        <div className=" flex justify-center">
          <div className="container">
            <div className="mt-10 text-2xl text-neutral-400">Products</div>
            <div className="flex-wrap grid md:grid-cols-4 gap-5 grid-cols-2  my-10  ">
              {products &&
                products.map((product) => {
                  return (
                    <div className="h-auto w-72 shadow-md  rounded-b-md">
                      {product.images.map((p) => (
                        <img className="h-72 w-72" src={p.download_url} 
                        onClick={() => {
                          navigate(`/product/single/${product._id}`)
                      }} 
                        />
                      ))}
                      <div className="px-4 py-3 space-y-2">
                        <h1 className="text-md text-neutral-700">
                          {product.name}
                        </h1>
                        <h1 className="text-md text-neutral-700">
                          {product.description}
                        </h1>
                        <h2 className="text-neutral-500">RS {product.price}</h2>
                        <button
                          onClick={() => handleAddingToCart({ ...product })}
                          className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  );
                })}

              {/* 
              <div className="h-auto w-72 shadow-md  rounded-b-md">
                <img
                  className="max-h-72 w-72"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="px-4 py-3 space-y-2">
                  <h1 className="text-md text-neutral-700">XYXN fhdjfh dfjh</h1>
                  <h2 className="text-neutral-500">RS 1293</h2>
                  <button 
                  onClick={() => {

                  }}
                  className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md  rounded-b-md">
                <img
                  className="max-h-72 w-72"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="px-4 py-3 space-y-2">
                  <h1 className="text-md text-neutral-700">XYXN fhdjfh dfjh</h1>
                  <h2 className="text-neutral-500">RS 1293</h2>
                  <button className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md  rounded-b-md">
                <img
                  className="max-h-72 w-72"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="px-4 py-3 space-y-2">
                  <h1 className="text-md text-neutral-700">XYXN fhdjfh dfjh</h1>
                  <h2 className="text-neutral-500">RS 1293</h2>
                  <button className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md  rounded-b-md">
                <img
                  className="max-h-72 w-72"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="px-4 py-3 space-y-2">
                  <h1 className="text-md text-neutral-700">XYXN fhdjfh dfjh</h1>
                  <h2 className="text-neutral-500">RS 1293</h2>
                  <button className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md  rounded-b-md">
                <img
                  className="max-h-72 w-72"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="px-4 py-3 space-y-2">
                  <h1 className="text-md text-neutral-700">XYXN fhdjfh dfjh</h1>
                  <h2 className="text-neutral-500">RS 1293</h2>
                  <button className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md  rounded-b-md">
                <img
                  className="max-h-72 w-72"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="px-4 py-3 space-y-2">
                  <h1 className="text-md text-neutral-700">XYXN fhdjfh dfjh</h1>
                  <h2 className="text-neutral-500">RS 1293</h2>
                  <button className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md  rounded-b-md">
                <img
                  className="max-h-72 w-72"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="px-4 py-3 space-y-2">
                  <h1 className="text-md text-neutral-700">XYXN fhdjfh dfjh</h1>
                  <h2 className="text-neutral-500">RS 1293</h2>
                  <button className="px-2 py-2 text-neutral-600 border-[1px] border-gray-400 bg-background rounded-md">
                    Add to cart
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
