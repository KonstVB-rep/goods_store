import React, { useState } from "react";
import { Button, Modal } from "antd";
import SignInOut from "../../SignInOut/SignInOut";
import { useSelector } from "react-redux";
import { RxAvatar } from "react-icons/rx";

const Avatar = () => {
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.app.userInfo);

  return (
    <>
      <Button
        className="p-0 border-none flex-shrink-0 h-10 w-10 p-1"
        onClick={() => setOpen(true)}
      >
        <RxAvatar
          className="w-full h-full rounded-full dark:text-white"
          alt="userIcon"
        />
      </Button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={400}
        bodyStyle={{
          height: "110px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="h-[110px]"
        footer={[]}
      >
        {userInfo?.name && (
          <span className="block py-4 font-lg text-center font-bold uppercase">
            {userInfo.name}
          </span>
        )}
        <SignInOut />
      </Modal>
    </>
  );
};

export default Avatar;
