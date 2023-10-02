import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const SocialConnect = () => {
  return (
    <div className="flex flex-col items-start font-sans w-full">
      <h1 className="text-f5 text-3xl mb-8 uppercase">or continue with</h1>
      <div className="w-full flex justify-between items-center">
        <div className="w-full">
          <button className="w-48 bg-f5 text-25 text-sm font-semibold tracking-wider py-1.5 px-8 rounded-3xl uppercase">
            facebook
          </button>
          <button className="w-48 bg-f5 text-25 text-sm font-semibold tracking-wider py-1.5 px-8 rounded-3xl uppercase mx-8">
            twitter
          </button>
          <button className="w-48 bg-f5 text-25 text-sm font-semibold tracking-wider py-1.5 px-8 rounded-3xl uppercase">
            google
          </button>
        </div>
        <FontAwesomeIcon
          className="text-f5 text-4xl"
          icon={faArrowLeft}
          size="sm"
        />
      </div>
    </div>
  );
};
