import React from "react";

const IconSale = ({ isNew }) => {
  return (
    <div className="absolute top-4 right-0">
      {isNew && (
        <p className="bg-black text-white font-semibold font-titleFont px-6 py-1 rounded-l-xl">
          Sale
        </p>
      )}
    </div>
  );
};

export default IconSale;
