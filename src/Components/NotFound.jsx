import { NavLink} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {


  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
      
      <div className="text-center max-w-xl">
        
        {/* 404 TEXT */}
        <h1 className="text-[120px] font-extrabold  from-pink-500 to-violet-500 ">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-white mt-2">
          Page Not Found
        </h2>

        {/* DESC */}
        <p className="text-gray-400 mt-4">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTON */}
        <div className="mt-8 flex justify-center">
          <NavLink
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            <FaArrowLeft />
            Go Back Home
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
