import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {  // Adjust this value to when you want it to stick
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center px-6 py-4 bg-primary text-white h-9">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Courses</a>
          <a href="#" className="hover:text-gray-400">Quiz</a>
          <a href="#" className="hover:text-gray-400">MCQs</a>
          <a href="#" className="hover:text-gray-400">Past Papers</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedin size={20} /></a>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav
        className={`flex justify-between items-center px-6 py-4 bg-white text-black font-medium  w-full transition-all duration-500 ease-in-out ${
          isSticky ? "fixed top-0 left-0 shadow-lg z-50" : "relative"
        }`}
      >
        <div className="font-semibold text-4xl">Infirix.io</div>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="hover:text-zinc-600">Home</a>
          <a href="#" className="hover:text-zinc-600">Courses</a>
          <a href="#" className="hover:text-zinc-600">Quiz</a>
          <a href="#" className="hover:text-zinc-600">MCQs</a>
          <a href="#" className="hover:text-zinc-600">Past Papers</a>
        </div>
        <button className="hidden lg:block bg-secondary hover:bg-black text-white px-4 py-2 rounded-md">
          Contact Us
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-accent text-white flex flex-col items-center py-4 space-y-4">
          <a href="#" className="hover:text-zinc-600">Home</a>
          <a href="#" className="hover:text-zinc-600">Courses</a>
          <a href="#" className="hover:text-zinc-600">Quiz</a>
          <a href="#" className="hover:text-zinc-600">MCQs</a>
          <a href="#" className="hover:text-zinc-600">Past Papers</a>
          <button className="bg-secondary hover:bg-black text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}
