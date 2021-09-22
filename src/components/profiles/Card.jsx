import React from "react";

const Card = ({ infomation }) => {
  const formatNumber = (n) => {
    if (n < 1000) {
      return n;
    }

    return String(n).split("")[0] + "." + String(n).split("")[1] + "K";
  };

  return (
    <div className="card w-96 mx-auto bg-white shadow-xl">
      <div className="relative">
        <img
          className="w-32 mx-auto rounded-full -mt-20 border-2 border-blue-500"
          src="https://avatars.githubusercontent.com/u/67946056?v=4"
          alt=""
        />
      </div>
      <div className="text-center mt-2 text-3xl font-medium">
        {infomation.userInfo.user.nickname}
      </div>
      <div className="text-center mt-2 font-light text-sm">
        @{infomation.userInfo.user.uniqueId}
      </div>
      <div className="px-6 text-center mt-2 font-light text-sm">
        <p>{infomation.userInfo.user.signature}</p>
      </div>
      <div className="px-6 text-center mt-2 font-light text-sm">
        <button className="mx-auto w-50 bg-purple-300 hover:bg-purple-400 text-purple-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Dashboard</span>
        </button>
      </div>
      <hr className="mt-8" />
      <div className="flex p-4">
        <div className="w-1/2 text-center">
          <span className="font-bold">
            {formatNumber(infomation.userInfo.stats.followerCount)}
          </span>{" "}
          Followers
        </div>
        <div className="w-0 border border-gray-300"></div>
        <div className="w-1/2 text-center">
          <span className="font-bold">
            {formatNumber(infomation.userInfo.stats.followingCount)}
          </span>{" "}
          Following
        </div>
      </div>
    </div>
  );
};

export default Card;
