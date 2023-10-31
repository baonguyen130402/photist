import { useEffect } from "react";
import { preLoaderAnim } from "../animation";
import { Home } from "./HomePage";

interface Data {
  content: String;
}

export const PreLoader = (props: Data) => {
  useEffect(() => {
    preLoaderAnim();
  });

  return (
    <>
      <div className="preloader h-screen w-full bg-black text-white fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden">
        <div className="texts-container flex items-center justify-around h-16 w-36 text-xl font-black overflow-hidden text-white">
          <span>{props.content}</span>
        </div>
      </div>
    </>
  );
};
