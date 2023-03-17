import { isAuthenticated } from "../../utils";
import { useState } from "react";
import Select from "../Select/Select";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
export default function Navbar() {
  const [isAuth, setIsAuth] = useState(isAuthenticated());
  const { user, cart } = useUserContext();
  console.log("user: ", user);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="pl-2 flex container items-start justify-between ">
        <div className="text-2xl font-Belgant-Aesthetic flex items-center h-full">
          <div>
            <Link to="/">Multivendos+</Link>
         
          </div>
        </div>

        <div className="w-[60%] flex items-center justify-evenly h-full">
          <div className="flex">
            <span className="flex items-center justify-center">
              <svg width="35" height="35" viewBox="0 0 56 80" fill="">
                <path
                  d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="text-[0.8rem]">
              AEC,Guwahati,
              <br />
              <span className="font-extrabold">ASSAM-781013</span>
            </div>
          </div>
          <div className="w-[70%]">
            <div
              tabIndex={-1}
              className="flex px-4 justify-center items-center w-full rounded-full border-[#c9c9c9] border-[1px]   flex-1"
            >
              {/* <div className="">
          <div className="">
          <Select />
          </div>
        </div> */}

              <svg width="20" height="20" viewBox="0 0 70 70" fill="none">
                <path
                  d="M50 44H46.84L45.72 42.92C49.64 38.36 52 32.44 52 26C52 11.64 40.36 0 26 0C11.64 0 0 11.64 0 26C0 40.36 11.64 52 26 52C32.44 52 38.36 49.64 42.92 45.72L44 46.84V50L64 69.96L69.96 64L50 44ZM26 44C16.04 44 8 35.96 8 26C8 16.04 16.04 8 26 8C35.96 8 44 16.04 44 26C44 35.96 35.96 44 26 44Z"
                  fill="#6b7280"
                />
              </svg>

              <input
                placeholder="Search....."
                className=" px-2 py-3  focus:border-neutral-400 w-[100%]    outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
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
          {user?.role == "vendor" && (
            <Link to='/dashboard/vendor'>
              <div className="bg-indigo-300 px-2 py-2 rounded-sm text-neutral-700">
                {" "}
                Dashboard
              </div>
            </Link>
          )}
          {!isAuthenticated() ? (
            <div
              onClick={() => navigate("/login")}
              className="bg-cyan-700 px-5 py-2 flex items-center rounded-[0.3em] border-none cursor-pointer text-white"
            >
              Log in
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-black cursor-pointer">
              <Link to={`/user/profile`}>
                <img className="w-16 h-16 rounded-full" src={user?.avatar} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
