import { PreLoader } from "./Preloader";
import {
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../assets/png/HomePage";
import Logo from "../assets/png/Icons/logomain.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();

  const slide1 = [Img1, Img2, Img3];
  const slide2 = [Img4, Img15, Img11];
  const slide3 = [Img7, Img8, Img9];
  const slide4 = [Img10, Img11, Img12];
  const slide5 = [Img13, Img14, Img15];

  useEffect(() => {
    document.title = "Photist";
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <PreLoader />;
      <div className="w-full h-full bg-black flex translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-125 scale-y-125">
        <div className="flex flex-col flex-1 h-screen mr-1 ml-2 overflow-hidden animate-sliding-up delay-0">
          {slide1.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </div>
        <div className="flex flex-col flex-1 h-full mr-1 ml-2 overflow-hidden animate-sliding-down delay-250">
          {slide2.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </div>
        <div className="flex flex-col flex-1 h-full mr-1 ml-2 overflow-hidden animate-sliding-up delay-500">
          {slide3.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </div>
        <div className="flex flex-col flex-1 h-full mr-1 ml-2 overflow-hidden animate-sliding-down delay-750">
          {slide4.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </div>
        <div className="flex flex-col flex-1 h-full mr-1 ml-2 overflow-hidden animate-sliding-up delay-1000">
          {slide5.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </div>
      </div>
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-05 opacity-70 ">
        <div className="container mx-auto py-6 flex flex-col justify-between h-screen">
          <nav className="flex justify-between">
            <div>
              <img src={Logo} className="text-white cursor-pointer" />
            </div>
            <div>
              <button
                onClick={() => navigate("join")}
                className="uppercase bg-white text-sm py-1.5 px-3 tracking-wider ease-linear duration-300 hover:bg-[#ccc] rounded-3xl"
              >
                join
              </button>
              <button
                onClick={() => navigate("login")}
                className="uppercase bg-transparent text-sm py-1.5 text-white px-2 tracking-wider rounded-3xl duration-300 hover:text-[#ccc]"
              >
                Login
              </button>
            </div>
          </nav>
          <div className="grid grid-cols-12">
            <h1 className="col-span-9 uppercase mb-24 text-white text-8xl leading-tight w-full">
              specially designed for photography
            </h1>
            <h1 className="uppercase text-white block col-span-5 text-lg tracking-wider">
              learn, share and enhence your photo
            </h1>
          </div>
          <footer className="flex justify-between items-center text-white flex-3 order-last">
            <h1 className="uppercase">power by google ai</h1>
            <ul className="flex justify-around w-1/3 cursor-pointer">
              <li className="uppercase">app</li>
              <li className="uppercase">blog</li>
              <li className="uppercase">extensions</li>
              <li className="uppercase">terms</li>
              <li className="uppercase">contact</li>
            </ul>
          </footer>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};
