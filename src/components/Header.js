import React from "react";

const Header = () => {
  return (
    <header className="relative bg-blue-100 text-gray-800 h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Section: Text and Button */}
        <div className="flex flex-col justify-center items-start text-left w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0030B3] to-[#99CA3C]">
            Learn without limits
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-blue-800"> {/* Blue text */}
            Join us and start your journey towards success with the best educational
            resources available at your fingertips.
            Start, switch, or advance your career with more than 7000 courses, Professional Certificates, and degrees 
            from world-class universities and companies.
          </p>
          <button className="bg-gradient-to-r from-[#0030B3] to-[#99CA3C] text-white py-2 px-6 rounded-full text-lg transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/images/image.png" // Replace this with the correct path to your image
            alt="Education Header"
            className="max-w-lg w-full rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
