import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black w-full font-sans">
      <div className="container columns-12 h-screen mx-auto flex items-center">
        <div className="flex justify-between w-full grid grid-cols-12 grid-rows-3">
          <div className="col-start-1 col-end-5 row-span-2">
            <FontAwesomeIcon
              onClick={() => navigate(-1)}
              className="text-f5 text-4xl col-span-1"
              icon={faArrowLeft}
              size="sm"
            />
            <h1 className="text-f5 text-4.5xl uppercase font-medium mb-8 tracking-wider">
              welcome back !
            </h1>
            <div className="grid grid-cols-4 grid-rows-12">
              <input
                type="text"
                placeholder="EMAIL OR USERNAME"
                className="col-span-3 row-start-3 text-sm text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 mb-4"
              />
              <input
                type="email"
                placeholder="PASSWORD"
                className="col-span-3 row-start-4 text-sm text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 mb-3"
              />
            </div>
            <h1 className="text-f5 text-sm tracking-widest font-semibold uppercase col-span-3 row-start-4">
              forgot your password?
            </h1>
            <button className="mt-6 text-25 bg-f5 text-sm font-medium uppercase py-1 px-3.5 rounded-2xl hover:bg-gray-300 leading-">
              log in
            </button>
            <h1 className="text-f5 text-3xl mb-8 uppercase">
              or continue with
            </h1>
            h
            
          </div>
          <div className="bg-white w-full col-span-6 col-start-7 row-span-3">
            img
          </div>
        </div>
      </div>
    </div>
  );
};
