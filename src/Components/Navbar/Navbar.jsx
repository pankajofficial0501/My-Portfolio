import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const MenuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300  px-[7vw] md:px-[7vw] lg:px-[20vw] 
        ${isScrolled ? 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow:md' : 'bg-transparent'} `}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#ec8245]">&lt;</span>
          <span className="text-white">Pankaj</span>
          <span className="text-[#ec8245]">/</span>
          <span className="text-white">Sharma</span>
          <span className="text-[#ec8245]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 ">
          {MenuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#ec8245]  ${
                activeSection === item.id ? "text-[#ec8245]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Icons */}

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/PankajSharma-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ec8245] transition-colors duration-300"
          >
            <>
              <FaGithub size={24} />
            </>
          </a>
          <a
            href="https://github.com/PankajSharma-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ec8245] transition-colors duration-300"
          >
            <>
              <FaLinkedin size={24} />
            </>
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#ec8245] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#ec8245] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className=" absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden ">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
               {MenuItems.map((item) => (
                <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#ec8245]" : ""}`}>
                  <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
                </li>
               ))}
               <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
