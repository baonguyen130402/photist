import { PreLoader } from "./Preloader";
import { MyImg_1 } from "../assets/png/JoinPage";
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

export const Home = () => {
  const slide1 = [Img1, Img2, Img3];
  const slide2 = [Img4, Img5, Img6];
  const slide3 = [Img7, Img8, Img9];
  const slide4 = [Img10, Img11, Img12];
  const slide5 = [Img13, Img14, Img15];

  return (
    <>
      <PreLoader />
      <div className="w-full h-screen bg-black flex relative translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-125 scale-y-125">
        <div className="flex flex-col flex-1 h-full mr-1 ml-2 overflow-hidden animate-sliding-up delay-0">
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

        <div className="flex justify-center items-center bg-slate-200 opacity-30 fixed top-0 right-0 bottom-0 left-0">
          FIXED BLOCK
        </div>
      </div>
    </>
  );
};
