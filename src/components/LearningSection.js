import React from "react";

const LearningSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0030B3] to-[#99CA3C]">
          <span className="block">Start Learning</span>
          <span className="block">with Free Courses</span>
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-blue-800">
          Unlock new skills and career opportunities with our free courses.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Web Development Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg h-full hover:scale-105 transition-all duration-300 pb-8">
            <img
              src="/images/div.png"
              alt="Web Development"
              className="h-[250px] w-full object-cover mb-4 rounded-xl"
            />
            <h3 className="text-xl font-bold text-[#99CA3C]">Web Development</h3>
            <p className="text-gray-600 mt-2">
              Learn the fundamentals of web development, including HTML, CSS, and JavaScript. 
              This course will also introduce you to frameworks like React and Vue.js, which are 
              highly sought after in the tech industry. Dive deep into the world of full-stack development!
            </p>
            <p className="text-gray-600 mt-4">
              This course is perfect for those looking to build websites and web applications, and gain skills in modern technologies used by developers.
            </p>
          </div>

          {/* Data Science Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg h-full hover:scale-105 transition-all duration-300 pb-8">
            <img
              src="/images/div.png"
              alt="Data Science"
              className="h-[250px] w-full object-cover mb-4 rounded-xl"
            />
            <h3 className="text-xl font-bold text-[#99CA3C]">Data Science</h3>
            <p className="text-gray-600 mt-2">
              Dive into data analysis, machine learning, and data visualization techniques. 
              In this course, you will learn how to work with large datasets, use machine learning 
              algorithms for predictions, and visualize data using Python and tools like Tableau.
            </p>
            <p className="text-gray-600 mt-4">
              Perfect for anyone interested in analyzing data, discovering trends, and working with real-world data to make informed decisions.
            </p>
          </div>

          {/* Digital Marketing Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg h-full hover:scale-105 transition-all duration-300 pb-8">
            <img
              src="/images/div.png"
              alt="Digital Marketing"
              className="h-[250px] w-full object-cover mb-4 rounded-xl"
            />
            <h3 className="text-xl font-bold text-[#99CA3C]">Digital Marketing</h3>
            <p className="text-gray-600 mt-2">
              Master SEO, SEM, social media marketing, and other digital marketing strategies. 
              This course will guide you on how to optimize websites for search engines, create 
              compelling ad campaigns, and analyze performance metrics to grow a business online.
            </p>
            <p className="text-gray-600 mt-4">
              If you're looking to increase brand visibility and drive traffic through online strategies, this course is for you.
            </p>
          </div>
        </div>

        {/* Ready to Join Section */}
        <div className="py-16 bg-[#e0f7fa] rounded-lg mt-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Ready to Join?</h2>
          <p className="text-lg text-gray-600 mb-6">Register for free courses and start learning today!</p>
          <button className="bg-gradient-to-r from-[#0030B3] to-[#99CA3C] text-white py-2 px-6 rounded-full text-lg transition-all duration-300">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
