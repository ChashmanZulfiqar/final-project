import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebaseConfig'; // Import Firestore methods

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add form data to Firebase Firestore
    try {
      setStatusMessage('Submitting...');
      await addDoc(collection(db, 'contactUsMessages'), {
        email: formData.email,
        subject: formData.subject,
        timestamp: new Date(),
      });
      setStatusMessage('Form submitted successfully!');
      setFormData({
        email: '',
        subject: '',
      });
    } catch (error) {
      setStatusMessage('Error submitting form. Please try again.');
      console.error("Error submitting form to Firebase:", error);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly">
        {/* Left side image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="w-full h-full relative">
            <img
              src="/images/contact.png" // Update your image path accordingly
              alt="Contact Us"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right side form */}
        <div className="lg:w-1/3 bg-gray-100 p-10 rounded-xl shadow-lg mt-8 lg:mt-0 lg:pl-6">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Contact Us</h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-600 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter subject"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0030B3] to-[#99CA3C] text-white py-3 rounded-full text-lg transition-all duration-300"
            >
              Submit
            </button>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <p className="mt-4 text-center text-gray-700">{statusMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
