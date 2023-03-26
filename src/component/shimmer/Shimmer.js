import React from "react";
import "./shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div></div>
      <div className="flex flex-wrap gap-5 ml-4 shimmer-container">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index}>
              <div className="bg-gray-200 h-40 w-56 mt-2 rounded-md first-shimmer"></div>
              <div className="bg-gray-200 h-6 w-52 mt-1 second-shimmer"></div>
              <div className="bg-gray-200 h-5 w-40 mt-1 third-shimmer"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
