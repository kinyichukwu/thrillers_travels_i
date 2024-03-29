import Profile from "./components/side_bar/profile/profile";
import FullMenu from "./components/side_bar/menu/full_menu";
import FlightHeading from "./components/main_content/heading/heading";
import { FaChevronDown } from "react-icons/fa";
import nav_img from "./assets/nav_img.jpeg";
import nav_map from "./assets/nav_map.jpeg";
import "./index.css";
import emirates from "./assets/flightimg/Emirates.jpeg";
import map from "./assets/flightimg/map.jpeg";

function DottedBottom() {
  return (
    <div className="flex relative justify-between items-center">
      <div className="w-6 h-6 rounded-full bg-t translate-x-[-.75rem]"></div>

      <div className="w-full max-h-[1px]  border-dashed border-t-[3px]"></div>

      <div className="w-6 h-6 rounded-full bg-t translate-x-[.75rem]"></div>
    </div>
  );
}

export default function Home() {
  if (window.innerWidth < 1200) {
    return (
      <div className="text-center text-2xl font-bold text-p h-screen flex justify-center items-center">
        {" "}
        <h2 className="">Please view this page on a larger screen 🥂😕</h2>
      </div>
    );
  }

  return (
    <main className="flex ">
      {/* Sidebar */}
      <div className="bg-s text-white w-72 flex-shrink-0 min-h-screen">
        <Profile />
        <FullMenu />

        <div className="ml-5 p-5 flex flex-col gap-5">
          <h2 className=" text-p">ACTIVE USERS</h2>

          <img src={nav_img} className="w-[9rem]" />
          <img src={nav_map} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-t p-8 w-full flex flex-col gap-7">
        <FlightHeading />

        <div className="flex justify-between items-center text-base">
          <p className="text-s text-lg font-semibold"> RESULTS (25)</p>

          <div className="">
            <button className="text-s font-semibold p-3 rounded-3xl bg-white px-7 inline-flex">
              FILTER
            </button>
            <button className="text-s font-semibold p-3 rounded-3xl bg-white px-7 inline-flex items-center gap-3 ml-3">
              TICKET OF CLASS <FaChevronDown />
            </button>
          </div>
        </div>

        <div className="flex w-full gap-[2.5%] h-full ">
          <div className="w-[65%] bg-white rounded-3xl">
            <div className="flex justify-between items-center flex-wrap px-6 py-8">
              {/**one */}
              <div className="">
                <img src={emirates} />
              </div>
              {/**two */}
              <div className="flex flex-col justify-between items-end   h-20">
                <p className="text-s font-medium text-2xl">JFK</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**three */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s text-xs">EMIRATES</p>
                <p className="text-p text-base">11H 20M</p>
                <p className="text-s text-base">NON-STOP</p>
              </div>
              {/**four */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-medium text-2xl">BOM</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**five */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-bold">$ 1,235</p>

                <button className="text-white font-medium p-3 rounded-3xl bg-p px-5 text-xs">
                  BOOK NOW
                </button>
              </div>
            </div>

            <DottedBottom />

            <div className="flex justify-between items-center flex-wrap px-6 py-8">
              {/**one */}
              <div className="">
                <img src={emirates} />
              </div>
              {/**two */}
              <div className="flex flex-col justify-between items-end   h-20">
                <p className="text-s font-medium text-2xl">JFK</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**three */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s text-xs">EMIRATES</p>
                <p className="text-p text-base">11H 20M</p>
                <p className="text-s text-base">NON-STOP</p>
              </div>
              {/**four */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-medium text-2xl">BOM</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**five */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-bold">$ 1,235</p>

                <button className="text-white font-medium p-3 rounded-3xl bg-p px-5 text-xs">
                  BOOK NOW
                </button>
              </div>
            </div>

            <DottedBottom />

            <div className="flex justify-between items-center flex-wrap px-6 py-8">
              {/**one */}
              <div className="">
                <img src={emirates} />
              </div>
              {/**two */}
              <div className="flex flex-col justify-between items-end   h-20">
                <p className="text-s font-medium text-2xl">JFK</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**three */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s text-xs">EMIRATES</p>
                <p className="text-p text-base">11H 20M</p>
                <p className="text-s text-base">NON-STOP</p>
              </div>
              {/**four */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-medium text-2xl">BOM</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**five */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-bold">$ 1,235</p>

                <button className="text-white font-medium p-3 rounded-3xl bg-p px-5 text-xs">
                  BOOK NOW
                </button>
              </div>
            </div>

            <DottedBottom />

            <div className="flex justify-between items-center flex-wrap px-6 py-8">
              {/**one */}
              <div className="">
                <img src={emirates} />
              </div>
              {/**two */}
              <div className="flex flex-col justify-between items-end   h-20">
                <p className="text-s font-medium text-2xl">JFK</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**three */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s text-xs">EMIRATES</p>
                <p className="text-p text-base">11H 20M</p>
                <p className="text-s text-base">NON-STOP</p>
              </div>
              {/**four */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-medium text-2xl">BOM</p>
                <p className="text-s text-sm">14:20</p>
              </div>
              {/**five */}
              <div className="flex flex-col justify-between items-end  h-20">
                <p className="text-s font-bold">$ 1,235</p>

                <button className="text-white font-medium p-3 rounded-3xl bg-p px-5 text-xs">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>

          <div className="w-[32.5%] bg-s rounded-3xl">
            <div className="flex justify-between items-center flex-wrap px-6 py-8 text-white">
              {/**two */}
              <div className="flex flex-col justify-between items-end   h-20">
                <p className=" text-sm">FROM</p>
                <p className=" font-medium text-2xl">JFK</p>
              </div>
              <div className="flex flex-col justify-between items-end   h-20">
                <p className=" font-medium text-2xl"></p>
                <p className=" ">NON-STOP</p>
              </div>

              <div className="flex flex-col justify-between items-end  h-20">
                <p className=" text-sm">TO</p>
                <p className=" font-medium text-2xl">BOM</p>
              </div>
            </div>

            <img src={map} />

            <div className="bg-[#3d5653] w-full px-6 ">
              <div className="flex justify-between py-7">
                <button className="text-white font-medium p-3 rounded-3xl bg-p px-5 text-sm">
                  NON STOP
                </button>
                <button className="text-white font-medium p-3 rounded-3xl  px-5 text-sm">
                  ONE STOP
                </button>
                <button className="text-white font-medium p-3 rounded-3xl  px-5 text-sm">
                  MORE STOP
                </button>
              </div>

              <p className="font-medium mb-5 text-white">PRICE</p>

              <div className="relative w-full pb-10">
                <div className="w-5 h-5 absolute bg-p rounded-full left-12 top-[-10px]"></div>
                <div className="w-5 h-5 absolute bg-p rounded-full right-12 top-[-10px]"></div>
                <div className="w-full h-[1px] bg-[#ffffff4b] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
