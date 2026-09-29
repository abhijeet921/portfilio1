import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-pink-600">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collabarate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/*contact form */}
          <div>
            <form className="space-6">
              <div>
                <label htmlFor="name" className="block text-grey-300 mb-2">
                  Your Name
                </label>
                <input
                  className="w-full bg-black border border-dark-300 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-grey-300 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full bg-black border border-dark-300 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-grey-300 mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full  h-40 bg-black border border-dark-300 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 rounded-lg font-medium hover:bg-pink-900 transition duration-300 cursor-pointer my-3"
              >
                send
              </button>
            </form>
          </div>

          {/*contact information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-pink-600 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Banglore, India</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-pink-600 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">abhi@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-pink-600 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">1234567890</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-pink-600 hover:bg-pink-900 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-400 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-400 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-400 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-pink-600 hover:bg-pink-900 hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
