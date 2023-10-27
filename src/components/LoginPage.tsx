import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import MyImage from "../assets/png/LoginPage_PNG.png";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black font-sans h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-12 gap-6 container mx-auto justify-between">
        <div className="col-span-6">
          <FontAwesomeIcon
            onClick={() => navigate(-1)}
            className="text-white text-5xl font-thin mb-4"
            icon={faArrowLeft}
            size="sm"
          />
          <div className="grid grid-cols-6 gap-6">
            <h1 className="uppercase text-white font-semibold mb-6 text-5.5xl tracking-wide col-span-5">
              welcome back !
            </h1>
          </div>
          <div className="grid grid-cols-6 grid-rows-2 gap-6">
            <input
              type="email"
              placeholder="Email or username"
              className="col-span-3 row-start-1 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 placeholder:text-sm text-base"
            />
            <input
              type="password"
              placeholder="password"
              className="col-span-3 row-start-2 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 placeholder:text-sm text-base"
            />
          </div>
          <a className="text-f5 text-base">
            Forgot your password?
          </a>
          <div>
            <button className="uppercase bg-f5 text-sm py-1.5 px-2 row-start-7 tracking-wider rounded-3xl">
              login
            </button>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <span className="uppercase text-white text-4xl col-span-4 tracking-widest">
              or continue with
            </span>
          </div>
        </div>
        <img className="col-span-6" src={MyImage} />
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-6 col-start-1">
          <div className="grid grid-cols-6 gap-6">
            <button className="col-start-1 bg-f5 py-1.5 col-span-3 text-25 text-sm font-semibold tracking-wider rounded-3xl uppercase">
              facebook
            </button>
            <button className="col-start-4 bg-f5 py-1.5 col-span-3 text-25 text-sm font-semibold tracking-wider rounded-3xl uppercase">
              twitter
            </button>
          </div>
        </div>
        <div className="col-span-6 col-start-7">
          <div className="grid grid-cols-6 gap-6">
            <button className="col-span-3 col-start-1 py-1.5 bg-f5 text-25 text-sm font-semibold tracking-wider rounded-3xl uppercase">
              google
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="bg-black h-screen font-sans">
    //     <div classname="container mx-auto h-screen flex items-center justify-center">
    //       <div classname="grid grid-cols-12 grid-rows-5 h-screen">
    //         <div classname="col-start-1 col-span-6 row-start-2">
    //           <div classname="grid grid-cols-12 grid-rows-12 gap-y-4 gap-x-2">
    //             </h1>
    //           </div>
    //         </div>
    //         <div classname="grid col-span-12 grid-rows-5 row-start-4 col-start-1 gap-y-2 container mx-auto">
    //           <div classname="row-start-4 col-span-12 grid grid-cols-12 gap-x-6 col-start-1">
    //           </div>
    //         </div>
    //         <div classname="grid col-start-7 col-span-6 row-start-2 row-span-2 grid-cols-12 grid-rows-12">
    //           <div classname="row-start-1 col-span-12">
    //             <img src={myimage} classname="" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
