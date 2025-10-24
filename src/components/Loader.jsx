import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <HashLoader />
    </div>
  );
};

export default Loader;
