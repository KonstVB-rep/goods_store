import React, { useState } from 'react';

import { Button, Modal } from 'antd';
import { RxAvatar } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/features/appSlice';

import SignInOut from '../../SignInOut/SignInOut';

const Avatar = () => {
  const [open, setOpen] = useState(false);
  const userInfo = useSelector(selectUser);

  return (
    <>
      <Button
        className="p-0 border-none flex-shrink-0 h-12 w-12 p-2 rounded-full hover:bg-gray-400 focus-visible:bg-gray-400"
        onClick={() => setOpen(true)}
      >
        <RxAvatar
          className="w-full h-full text-black rounded-full dark:text-white"
          alt="userIcon"
        />
      </Button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={400}
        bodyStyle={{
          height: '110px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        className="h-[110px]"
        footer={[]}
      >
        <span className="block py-4 font-lg text-center font-bold uppercase">
          {userInfo?.name || '**********'}
        </span>
        <SignInOut />
      </Modal>
    </>
  );
};

export default Avatar;
