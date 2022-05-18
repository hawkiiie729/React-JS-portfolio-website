import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/25d8d1cf-1ea8-4cb1-b739-361fa19a8d50"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              // Submit the form below or shoot me an email -
              mishra.firehawk729@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>

      {/* social section */}

      <div className="  flex flex-col items-center  bg-[#0a192f] w-full h-8 pb-16   ">
        <div className=" visible md:invisible flex flex-auto space-x-4  pb-7 ">
          <div>
            <a
              className="flex justify-center items-center w-full text-gray-300  "
              href="https://www.linkedin.com/in/sudhanshu-mishra-53208b216/"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
          <div>
            <a
              className="flex justify-center items-center w-full text-gray-300 "
              href="https://github.com/hawkiiie729"
            >
              <FaGithub size={35} />
            </a>
          </div>
          <div>
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://mail.google.com/mail/u/0/#inbox?compose=mishra.firehawk729@gmail.com"
            >
              <HiOutlineMail size={35} />
            </a>
          </div>
          <div>
            <a
              className="flex justify-between items-center w-full text-gray-200 "
              href="/"
            >
              <BsFillPersonLinesFill size={35} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
