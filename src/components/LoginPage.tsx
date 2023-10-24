import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import MyImage from "../assets/png/LoginPage_PNG.png";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-black h-screen font-sans">
        <div className="container mx-auto h-screen flex items-center justify-center">
          <div className="grid grid-cols-12 grid-rows-5 h-screen">
            <div className="col-start-1 col-span-6 row-start-2">
              <div className="grid grid-cols-12 grid-rows-12 gap-y-4 gap-x-2">
                <FontAwesomeIcon
                  onClick={() => navigate(-1)}
                  className="text-white text-5xl font-thin col-start-1 row-start-1"
                  icon={faArrowLeft}
                  size="sm"
                />
                <h1 className="uppercase text-white font-semibold text-5xl tracking-wider col-start-1 col-span-10 row-start-2">
                  welcome back!
                </h1>
                <input
                  type="email"
                  placeholder="EMAIL OR USERNAME"
                  className="col-span-6 row-start-3 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 placeholder:text-sm text-base"
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  className="col-span-6 row-start-4 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 placeholder:text-sm text-base"
                />
                <a className="uppercase col-start-1 col-span-6 row-start-6 text-f5 text-lg">
                  forgot your password?
                </a>
                <button className="uppercase bg-f5 text-sm py-0.5 row-start-7 tracking-wider rounded-3xl col-start-1 col-span-2">
                  login
                </button>
              </div>
            </div>
            <div className="grid col-span-12 grid-rows-5 row-start-4 col-start-1 gap-y-2 container mx-auto">
              <span className="uppercase text-white col-span-4 text-4xl row-start-2 row-span-1 col-start-1">
                or continue with
              </span>
              <div className="row-start-4 col-span-12 grid grid-cols-12 gap-x-6 col-start-1">
                <button className="col-span-3 mr-5 col-start-1 bg-f5 text-25 text-sm font-semibold tracking-wider rounded-3xl uppercase">
                  facebook
                </button>
                <button className="col-span-3 mr-5 col-start-4 bg-f5 text-25 text-sm font-semibold tracking-wider rounded-3xl uppercase">
                  twitter
                </button>
                <button className="col-span-3 col-start-7 bg-f5 text-25 text-sm font-semibold tracking-wider rounded-3xl uppercase">
                  google
                </button>
              </div>
            </div>
            <div className="grid col-start-7 col-span-6 row-start-2 row-span-2 grid-cols-12 grid-rows-12">
              <div className="row-start-1 col-span-12">
                <img src={MyImage} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
