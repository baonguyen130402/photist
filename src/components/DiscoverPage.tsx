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
import { useNavigate, useNavigation } from "react-router-dom";
import { Navbar } from "./Navbar";

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

  const navigate = useNavigate();
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
          <Navbar title="D I S C O V E R" atDiscover={true} />
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
