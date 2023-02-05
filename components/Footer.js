import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import FooterSt from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={FooterSt.Footer}>
        <div className="bg-gray-50   flex md:flex-row flex-col justify-around ">
          <div className="p-1">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-6">
                Cool<span className="text-blue-600">minds</span>
              </p>
              <div className="flex gap-6 pb-5">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>

          <div className="p-1">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                About
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Products
              </li>
            </ul>
          </div>
          <div className="p-1">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Support Portals
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-1 bg-gray-50">
          <div className=" text-gray-800 font-semibold">
            © 2021-2022 All rights reserved | Build with ❤ by{" "}
            <span className="hover:text-blue-600 font-semibold cursor-pointer">
              CoolMinds{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
