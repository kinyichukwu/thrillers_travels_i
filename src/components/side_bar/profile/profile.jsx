import React from "react";
import profile from "../../../assets/flightimg/profile_pic.jpeg";

const Profile = () => {
  return (
    <div className=" flex items-center flex-col gap-3 py-[50px] bg-[#3d5654]">
      <div className="relative h-[6rem] w-[6rem] border border-p rounded-full flex justify-center items-center">
        <img src={profile} />
      </div>

      <div className="text-center">
        <h1 className="text-xl font-bold"> ALEX JOHNSON</h1>
        <p className="text-xs text-gray-400">alexjohnson@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
