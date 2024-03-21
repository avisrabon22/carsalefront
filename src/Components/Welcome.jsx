import { useState } from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
  const [showButton, setShowButton] = useState(false);

  const setButton = () => {
    // alert('Hello World')
    setShowButton(true);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to Car Sale</h1>
      </div>
      <div className="flex justify-center items-center h-scree">
        <button
          onClick={setButton}
          className="px-4 py-2 bg-blue-500 text-white rounded-e-full hover:bg-blue-600 "
        >
          Let's Start
        </button>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-center m-4">
          <Link
            to="/signin-user"
            className="mx-4 px-4 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-600"
          >
            Sign In as User
          </Link>
          <Link
            to="/signin-dealership"
            className="mx-4 px-4 py-2 bg-cyan-400 text-white rounded  hover:bg-cyan-600"
          >
            Sign In as Dealership
          </Link>
          <Link
            to="/signup-user"
            className="mx-4 px-4 py-2 bg-cyan-400 text-white rounded  hover:bg-cyan-600"
          >
            Signup as User
          </Link>
          <Link
            to="/signup-dealership"
            className="mx-4 px-4 py-2 bg-cyan-400 text-white rounded  hover:bg-cyan-600"
          >
           Signup as Dealership
          </Link>
        </div>
      </div>
    </>
  );
};
