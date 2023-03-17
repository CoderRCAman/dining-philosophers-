import Navbar from "../components/Navbar/Navbar";

export default function Product() {
  return (
    <div className="flex h-screen overflow-hidden flex-col flex-grow">
      <div className="mt-8">
        <Navbar />
      </div>

      <div className="max-h-screen flex mt-10 flex-grow justify-center">
        <div className="container  flex flex-grow">
          <div>
            <div>
              <div className="text-neutral-700 font-medium mb-3">Brands</div>
              <div className="space-x-2">
                <input type="checkbox" name="select" id="" />
                <span className="text-neutral-600">Nike</span>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="select" id="" />
                <span className="text-neutral-600">Abidas</span>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="select" id="" />
                <span className="text-neutral-600">Tuma</span>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-neutral-700 font-medium mb-3">
                Categories
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="select" id="" />
                <span className="text-neutral-600">Pajam</span>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="select" id="" />
                <span className="text-neutral-600">Dhoti</span>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="select" id="" />
                <span className="text-neutral-600">Jangia</span>
              </div>
            </div>
          </div>
          <div className="ml-20 mb-32 w-full scroll-smooth scrollbar-hide  overflow-x-scroll">
            <div className="flex flex-wrap gap-5">
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
              <div className="h-auto w-72 shadow-md">
                <img
                  className="h-60 w-full"
                  src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="p-2 space-y-1">
                  <h1 className="text-neutral-600">Name</h1>
                  <p className="text-neutral-500">Description</p>
                  <h2 className="text-neutral-600 font-bold">Rs 123</h2>
                  <button className="border-[1px] border-gray-400 py-2 px-5 bg-background rounded-md">
                    Add{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
