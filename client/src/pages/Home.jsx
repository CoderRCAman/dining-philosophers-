import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <div className=" min-h-screen flex flex-col">
        <div className="flex home_section_one_bg z-10 bg-background flex-col h-screen  justify-center gap-5 items-center">
          <div className="text-[#d9d8d4] text-xl font-Poppins font-extrabold">MULTIVENDOS+</div>
          <div className="font-Belgant-Aesthetic tracking-wide leading-snug flex-col  text-center flex text-7xl text-[#d9d8d4]">
            <span> Everything you love</span> in one place
          </div>
          <div className="font-Poppins text-[#d9d8d4] text-xl ">
            This is the ultimate shopping experience -minus the crowd
          </div>
          <Link to="/catlog">
            <button className="bg-[#161313] text-white px-10 py-3 rounded-full">
              <span>
                <Link to="/catlog">Shop Now</Link>
              </span>
            </button>
          </Link>
        </div>
        <div className="bg-[#d9d8d4]   min-h-screen py-16">
          <div className="font-Gilroy flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl text-[#161313] font-Belgant-Aesthetic">
                {" "}
                New Collection
              </h1>
              <div className="text-2xl text-[#161313] pt-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam possimus id assumenda dolor.
              </div>
            </div>
          </div>
          <div className="flex gap-10 justify-center mt-20">
            <div className="h-auto w-72 shadow-md  rounded-b-md">
              <img
                className="h-72 w-72"
                src={
                  "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />

              <div className="px-4 py-7 flex flex-col items-center space-y-2">
                <h1 className="text-md text-neutral-700">Shirts</h1>

                <h2 className="text-neutral-500">RS xx-xx</h2>
              </div>
            </div>

            <div className="h-auto w-72 shadow-md  rounded-b-md">
              <img
                className="h-72 w-72"
                src={
                  "https://images.pexels.com/photos/1804075/pexels-photo-1804075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />

              <div className="px-4 py-7 flex flex-col items-center space-y-2">
                <h1 className="text-md text-neutral-700">Jeans</h1>

                <h2 className="text-neutral-500">RS xx-xx</h2>
              </div>
            </div>
            <div className="h-auto w-72 shadow-md  rounded-b-md">
              <img
                className="h-72 w-72"
                src={
                  "https://img.freepik.com/free-photo/perky-girl-stylish-glasses-stares-amazement-walking-pink-wall-brunette-culottes-orange-blouse-posing-with-red-handbag_197531-14254.jpg?size=626&ext=jpg&ga=GA1.1.1482155102.1679030767&semt=ais"
                }
              />

              <div className="px-4 py-7 flex flex-col items-center space-y-2">
                <h1 className="text-md text-neutral-700">Kids</h1>

                <h2 className="text-neutral-500">RS xx-xx</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen ">
          <div className="w-full flex flex-col justify-center items-centre h-full ml-20">
            {/* kanya */}
            <div>
              <img
                className="h-auto w-auto"
                src="https://media.discordapp.net/attachments/1085587306850820178/1086161430090354768/vendor-onboarding1_.jpg?width=1200&height=889"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4  flex-grow justify-center items-center ">
            <h1 className="text-5xl font-Belgant-Aesthetic ">
              The Consumer Gap
            </h1>
            <p className="text-center w-[50%] font-Gilroy text-xl">
              Gen Z is always on the lookout for unique finds. Makers make them
              - but don't have a single platform to sell them on.
            </p>

            <p className="text-xl font-Gilroy">Util now.</p>
            <Link to="/vendor/signup">
              <button className="px-4 mt-5 bg-accent text-white py-3 rounded-full">
                Become a Seller
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
