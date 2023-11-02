import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocialConnect } from "./SocialConect";
import { MyImg_1, MyImg_2, MyImg_3 } from "../assets/png/JoinPage";
import { PreLoader } from "./Preloader";
import { Loading } from "./LoadingPage";

export const Join = () => {
  const images = [
    MyImg_1,
    MyImg_2,
    MyImg_3,
  ];
  const indexOfCurrentImg = Math.floor(Math.random() * (images.length));

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? <Loading /> : (
        <div className="bg-black w-screen ">
          <div className="h-screen container mx-auto columns-12 flex flex-col items-start justify-around">
            <div className="w-screen container grid grid-cols-12">
              <img
                src={images[indexOfCurrentImg]}
                className="col-start-3 col-span-8 h-300 w-full"
              />
            </div>
            <h1 className="text-f5 text-4xl w-2/3 font-semibold font-sans tracking-wider uppercase leading-normal">
              join the best community for photographers
            </h1>
            <div className="w-full font-sans">
              <div className=" grid grid-cols-12 gap-x-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="col-span-3 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="col-span-3 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1"
                />
                <input
                  type="text"
                  placeholder="USER NAME"
                  className="col-span-3 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1"
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  className="col-span-3 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1"
                />
              </div>
              <div className="mt-8 mb-10">
                <p className="text-f5 font-sans uppercase text-sm font-semibold tracking-wide mb-4">
                  by creating account, you accept out terms
                </p>
                <button className="text-25 bg-f5 text-sm font-sans font-semibold uppercase py-1.5 px-6 rounded-2xl hover:bg-gray-300">
                  join
                </button>
              </div>
              <SocialConnect />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
