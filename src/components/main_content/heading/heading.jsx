import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdChair } from "react-icons/md";

const FlightHeading = () => {
  return (
    <div className="bg-white rounded-[2rem]">
      {" "}
      <div className=" w-full flex justify-between gap-[2.5%] flex-wrap p-8 pb-2 rounded-[2rem]">
        {" "}
        {/** UP */}
        <div className="w-[51%]  bg-t   rounded-[2rem] flex justify-between gap-3 font-medium text-base text-s items-center px-4">
          <div className="  flex  justify-center   items-center  p-4 text-base">
            <FaMapMarkerAlt className="mr-3" /> NEW YORK JFK
          </div>

          <FaCircleArrowRight className="text-s text-[2.5rem]" />

          <div className="  flex  justify-center   items-center  p-4 text-base">
            <FaMapMarkerAlt className="mr-3" /> MUBIA (BOM)
          </div>
        </div>
        <div className="w-[22%]  bg-t rounded-[2rem] flex gap-3 justify-center text-s text-base  items-center font-medium p-4">
          <FaCalendarAlt className="" /> 29th JULY, 2019
        </div>
        <div className="w-[22%]  bg-t rounded-[2rem] flex gap-3 justify-center text-s text-base  items-center font-medium p-4">
          <IoPerson className="" /> 2 TRAVELLERS
        </div>
      </div>
      <div className=" w-full flex justify-between gap-[2.5%] flex-wrap p-8 pt-3 rounded-[2rem]">
        {/** DWN */}

        <div className="w-[51%]  bg-t   rounded-[2rem] flex justify-between gap-3 font-medium text-lg text-s items-center p-1">
          <div className="w-[33.33%] rounded-[2rem] flex gap-3 justify-center text-white bg-s text-base  items-center font-medium p-3">
            ONE WAY
          </div>
          <div className="w-[33.33%] rounded-[2rem] flex gap-3 justify-center text-s bg-t text-base  items-center font-medium p-3">
            ROUND TRIP
          </div>
          <div className="w-[33.33%] rounded-[2rem] flex gap-3 justify-center text-s bg-t text-base  items-center font-medium p-3">
            MULTI CITY
          </div>
        </div>
        <div className="w-[22%]  bg-t rounded-[2rem] flex gap-3 justify-center text-s text-base  items-center font-medium p-4">
          <MdChair className="text-lg" /> FIRST CLASS
        </div>
        <div className="w-[22%]  bg-p rounded-[2rem] flex gap-3 justify-center text-white text-base  items-center font-medium p-4">
          SEARCH
        </div>
      </div>
    </div>
  );
};

export default FlightHeading;
