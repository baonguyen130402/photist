import Logo from "../assets/png/Icons/logomain.png";
import {
  analyse,
  atSign,
  cart,
  discover,
  dollar,
  notify,
  search,
  user,
} from "../assets/png/Icons";
import {
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img2,
  Img20,
  Img21,
  Img22,
  Img23,
  Img24,
  Img25,
  Img26,
  Img27,
  Img28,
  Img29,
  Img3,
  Img30,
  Img31,
  Img32,
  Img33,
  Img34,
  Img35,
  Img36,
  Img37,
  Img38,
  Img39,
  Img4,
  Img40,
  Img41,
  Img42,
  Img43,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../assets/png/DiscoverPage";
import { useEffect, useState } from "react";
import { Loading } from "./LoadingPage";

export const Discover = () => {
  const data = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
    Img23,
    Img24,
    Img25,
    Img26,
    Img27,
    Img28,
    Img29,
    Img30,
    Img31,
    Img32,
    Img33,
    Img34,
    Img35,
    Img36,
    Img16,
    Img37,
    Img38,
    Img39,
    Img40,
    Img41,
    Img42,
    Img43,
  ];

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
        <div className="relative">
          <nav className="bg-black fixed top-0 right-0 left-0 p-4 z-50">
            <div className="text-white flex justify-between items-center">
              <div className="flex items-center group">
                <img className="w-8" src={Logo} />
                <h1 className="text-4xl ml-2">
                  D I S C O V E R
                </h1>
                <ul className="hidden group-hover:flex items-center justify-around bg-black text-white absolute top-[56px] h-16 right-0 left-0">
                  <li className="uppercase font-semibold tracking-wider cursor-pointer">
                    sport
                  </li>
                  <li className="uppercase font-semibold tracking-wider cursor-pointer">
                    art
                  </li>
                  <li className="uppercase font-semibold tracking-wider cursor-pointer">
                    portrait
                  </li>
                  <li className="uppercase font-semibold tracking-wider cursor-pointer">
                    landscape
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <button className="uppercase border border-gray-700 text-[0.625rem] px-2 py-0.5 rounded-lg mr-6 hover:bg-[#ccc] hover:border-non ease-in-out duration-300">
                  get pro
                </button>
                <ul className="flex justify-between items-center">
                  <li className="cursor-pointer">
                    <img src={analyse} />
                  </li>
                  <li className="cursor-pointer">
                    <img src={discover} className="w-10 mr-2" />
                  </li>
                  <li className="cursor-pointer">
                    <img src={search} className="w-10 mr-2" />
                  </li>
                  <li className="cursor-pointer">
                    <img src={atSign} className="w-9 mr-4" />
                  </li>
                  <li className="cursor-pointer">
                    <img src={dollar} className="w-5 mr-4" />
                  </li>
                  <li className="cursor-pointer">
                    <img src={notify} className="w-10 mr-2" />
                  </li>
                  <li className="cursor-pointer">
                    <img src={user} className="w-10" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="columns-6 absolute bg-black top-16">
            {data.map((img, idx) => (
              <div
                key={idx}
                className="mb-2 hover:bg-white hover:opacity-90 group relative"
              >
                <img
                  src={img}
                />
                <div className="hidden group-hover:flex items-center justify-center bg-black text-white opacity-90 hover:opacity-60 h-6 w-6 absolute bottom-2 right-2 leading-none">
                  <span className="text-white">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
