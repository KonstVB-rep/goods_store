import React, { useMemo } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { logoStore, paymentLogo } from 'assets';
import { BsPaypal, BsPersonFill } from 'react-icons/bs';
import {
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const socialIcons = [
  <ImGithub className="duration-300" />,
  <FaYoutube className="duration-300" />,
  <FaFacebookF className="duration-300" />,
  <FaTwitter className="duration-300" />,
  <FaInstagram className="duration-300" />,
];

const Footer = () => {
  const renderSocial = useMemo(
    () =>
      socialIcons.map((icon) => (
        <button
          key={nanoid()}
          className="p-2 rounded-full hover:bg-gray-400 focus-visible:bg-gray-400 hover:text-black cursor-pointer"
        >
          {icon}
        </button>
      )),
    []
  );

  return (
    <div className="bg-black text-[#949494] pt-10 border-t-[1px] border-white">
      <div className="container flex flex-col md:flex-row justify-evenly gap-4 items-center px-4">
        <div className="flex gap-4 flex-col items-center">
          <Link to="/" className="logo">
            <img
              className="w-32 rounded-[40px]"
              src={logoStore}
              alt="logoStore"
            />
          </Link>
          <div className="flex flex-col items-center gap-4">
            <img className="w-56" src={paymentLogo} alt="paymentLogo" />
            <div className="flex gap-5 text-lg text-gray-400">
              {renderSocial}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 py-4">
          <div className="w-[200px]">
            <h2 className="text-xl font-semibold text-white mb-4 uppercase">
              locate us
            </h2>
            <div className="text-base flex flex-col gap-2" id="contacts">
              <p>Russia Federation, Moscow</p>
              <a href="tel:+79689785928">Mobile: 968 9785928</a>
              <a href="tel:+7968 25000000">Phone: 499 25000000</a>
              <a href="mailto:shop@gmail.com&body=Hello?subject=question">
                e-mail: shop@gmail.com
              </a>
            </div>
          </div>
          <div className="w-[200px]">
            <h2 className="text-xl font-semibold text-white mb-4 uppercase">
              profile
            </h2>
            <div className="text-base flex flex-col gap-2">
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                  <BsPersonFill />
                </span>
                My account
              </p>
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                  <BsPaypal />
                </span>
                Checkout
              </p>
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                  <FaHome />
                </span>
                Order tracking
              </p>
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                  <MdLocationOn />
                </span>
                Help & support
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-sm tracking-wide py-4 mt-5 border-t-[1px] border-gray-50 text-center">
        © ReactBD.com
      </p>
    </div>
  );
};

export default Footer;
