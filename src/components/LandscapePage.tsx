import { Navbar } from "./Navbar";
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
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../assets/png/LandscapePage";

export const Landscape = () => {
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
  ];

  return (
    <div className="relative">
      <Navbar title="" atDiscover={false} />
      <div className="absolute top-16 px-4 bg-black columns-6">
        {data.map((img, idx) => <img key={idx} src={img} className="mb-3" />)}
      </div>
    </div>
  );
};
