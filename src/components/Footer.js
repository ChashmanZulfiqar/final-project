import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#99CA3C] text-white py-6">
      <div className="container mx-auto text-center">
        {/* First Line: Logo */}
        <div className="flex justify-center mb-2"> {/* Reduced margin bottom */}
          <img
            src="/images/main logo.png" // Update the logo image path
            alt="Logo"
            className="w-32 h-32 object-contain" // Adjusted size for better visibility
          />
        </div>

        {/* Second Line: Text */}
        <div className="mb-2"> {/* Reduced margin bottom */}
          <p className="text-lg font-semibold">
            © 2024 onlineSaylani.com All rights reserved.
          </p>
        </div>

        {/* Third Line: Separator */}
        <div className="mb-2">
          <hr className="border-t border-white opacity-50" />
        </div>

        {/* Fourth Line: Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/facebook.png" // Update the Facebook icon path
              alt="Facebook"
              className="w-8"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/twitter.png" // Update the Twitter icon path
              alt="Twitter"
              className="w-8"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/insta.png" // Update the Instagram icon path
              alt="Instagram"
              className="w-8"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/linkedin.png" // Update the LinkedIn icon path
              alt="LinkedIn"
              className="w-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
