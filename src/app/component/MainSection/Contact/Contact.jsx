'use client';
import React from 'react';
import { SubmitButton } from '../../Button/SubmitButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='bg-[#FAF7F6] min-h-screen p-10'>
      <div className="flex flex-wrap justify-center">
        {/* Left Side Form */}
        <div className="w-full md:w-[550px] p-6 rounded-lg bg-white mx-4" style={{ height: '800px' }}>
          <h1 className="text-4xl text-[32px] text-brown">Get in Touch</h1>
          <h2 className="text-6xl text-[36px] mt-8 mb-2 whitespace-nowrap">Let's chat, Reach out <br />to us.</h2>
          <p className="text-gray-700 mb-6 whitespace-nowrap mt-8">
            Have questions or feedback? We’re here to help. <br />Send us a message, and we’ll respond in 24 hours.
          </p>
          <form className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border mt-2 border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border mt-2 border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border mt-2 border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border mt-2 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="w-full mb-4">
              <label className="block text-gray-700">Reason of Contact</label>
              <textarea
                placeholder="Leave a message"
                className="w-full h-[200px] p-3 border mt-2 border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <SubmitButton>Submit Now</SubmitButton>
            </div>
          </form>
        </div>

        {/* Right Side Boxes */}
        <div className="w-full md:w-[550px] flex flex-col justify-between space-y-4 mx-4">
          <div className="bg-white w-full h-[475px] rounded-lg mb-4">
            <img src="/assets/images/contact.png" alt="Your Image" className="object-cover w-full h-full rounded-md" />
          </div>
          <div className="bg-white w-full h-[300px] rounded-lg p-4 flex flex-col justify-center space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#A46254] rounded-full h-14 w-14 flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
              <div className="flex-1">
                <p className="text-lg  mb-1">Email</p>
                <p className='text-[#575757]'>invest@housebanao.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#A46254] rounded-full h-14 w-14 flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </div>
              <div className="flex-1">
                <p className="text-lg  mb-1">Phone number</p>
                <p className='text-[#575757]'>9876543210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#A46254] rounded-full h-14 w-14 flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faBuilding} size="lg" />
              </div>
              <div className="flex-1">
                <p className="text-lg  mb-1">Address</p>
                <p className='text-[#575757]'>747B, 7th floor, JMD megapolis sector 48, Gurgaon, Haryana 122018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
