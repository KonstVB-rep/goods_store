import React from "react";
import NotFound from "../assets/404.webp";

const NotFoundPage = () => {
  return (
    <div className="flex-grow">
      <img
        src={NotFound}
        alt="Not found page"
        className="w-full h-full max-h-[80vh] min-h-[20vh]"
      />
    </div>
  );
};

export default NotFoundPage;
