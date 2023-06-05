import React, { useEffect, useMemo } from "react";
import { BsSun } from "react-icons/bs";
import { TbMoonFilled } from "react-icons/tb";
import { Dropdown } from "antd";
import { GrSystem } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "redux/features/appSlice";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (
      theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  }, [theme]);

  const switchTheme = (value) => {
    document.body.dataset.theme = value;
    dispatch(setTheme(value));
  };

  const items = useMemo(
    () => [
      {
        label: (
          <button
            className="flex gap-2 items-center"
            onClick={() => switchTheme("light")}
          >
            <BsSun className="dark:text-white" />
            <span className="dark:text-white">Light </span>
          </button>
        ),
        key: "0",
      },
      {
        label: (
          <button
            className="flex gap-2 items-center"
            onClick={() => switchTheme("dark")}
          >
            <TbMoonFilled className="dark:text-white" />
            <span className="dark:text-white">Dark</span>
          </button>
        ),
        key: "1",
      },
      {
        label: (
          <button className="flex gap-2 items-center">
            <GrSystem className="dark:bg-white" />
            <span className="dark:text-white">System </span>
          </button>
        ),
        key: "2",
      },
    ],
    []
  );

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button className="h-10 w-10 p-1.5">
        {theme === "light" ? (
          <BsSun className="w-full h-full dark:fill-white" />
        ) : (
          <TbMoonFilled className="w-full h-full dark:text-white" />
        )}
      </button>
    </Dropdown>
  );
};

export default ThemeSwitcher;