import React from "react";

const Container = ({ children }) => {
  return (
    <div className="text-center flex-grow flex m-auto p-4 min-h-[50vh] items-center justify-center flex-col dark:text-white m-auto font-bold gap-4 text-stretchable">
      {children}
    </div>
  );
};

export default Container;
