import React, { memo } from 'react';

const Button = memo(({ onClick, children, styles = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles} mx-auto flex items-center dark:text-black dark:bg-gray-400 dark:hover:text-white dark:focus-visible:text-white dark:hover:bg-[#0958d9] dark:focus-visible:bg-[#0958d9] max-w-fit py-2 bg-black text-white rounded-[30px] py-1 px-6 active:bg-[#69b1ff] active:text-black uppercase hover:bg-[#0958d9] focus-visible:bg-[#0958d9] focus-visible:border-gray-900`}
    >
      {children}
    </button>
  );
});

export default Button;
