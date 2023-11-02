import {
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../assets/png/SportPage";
import { Navbar } from "./Navbar";

export const Sport = () => {
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
  ];

  return (
    <div className="relative">
      <Navbar title="" atDiscover={false}/>
      <div className="bg-black columns-6 px-4 absolute top-16">
        {data.map((img, idx) => <img key={idx} src={img} className="mb-3" />)}
      </div>
    </div>
  );
};
