// pages/contact.jsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const PAYLOAD_CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;
const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Send data to the Payload CMS API
      const response = await axios.post(`${PAYLOAD_CMS_URL}/contacts-data`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // If successful, show success message
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);

    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
      setSubmitError(error.response?.data?.message || "An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero section with gradient overlay */}
      <section className="relative py-16 mb-10 overflow-hidden bg-gradient-to-br from-white via-amber-50 to-amber-100">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/stars-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">Get in Touch</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Have questions about my services or want to schedule a consultation?
            Reach out and I'll get back to you soon.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm bg-opacity-80">
              <h2 className="text-2xl font-bold mb-6 text-indigo-900">Send a Message</h2>

              {submitSuccess && (
                <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitError && (
                <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-indigo-900">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full p-3 rounded-lg bg-white border border-indigo-100 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 outline-none transition"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full p-3 rounded-lg bg-white border border-indigo-100 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-indigo-900">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white border border-indigo-100 focus:ring-2 focus:border-indigo-300 outline-none transition appearance-none"
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="astrological">Astrological Predictions</option>
                    <option value="eft">EFT Tapping Sessions</option>
                    <option value="professional">Professional Advice</option>
                    <option value="custom">Custom Packages</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-indigo-900">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="How can I help you ?"
                    className="w-full p-3 rounded-lg bg-white border border-indigo-100 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 outline-none transition resize-none"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all text-white font-medium shadow-md hover:shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Direct Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80">
              <h2 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                <span className="bg-indigo-100 p-2 rounded-full mr-3 text-indigo-600">
                  <FaEnvelope className="w-5 h-5" />
                </span>
                Direct Contact
              </h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <FaEnvelope className="mr-3 text-indigo-500" />
                  <a href="mailto:contact@ravindrapurohit.com" className="hover:text-indigo-600 transition">
                    contact@ravindrapurohit.com
                  </a>
                </p>
                
                <p className="flex items-center text-gray-700">
                  <FaWhatsapp className="mr-3 text-indigo-500" />
                  <Link
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition"
                  >
                    +1 234 567 890
                  </Link>
                </p>
              </div>

              {/* <h3 className="text-lg font-medium mt-6 mb-3 text-indigo-900">Connect on Social Media</h3> */}
              {/* <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 hover:bg-blue-100 transition"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 hover:bg-blue-100 transition"
                >
                  <FaTwitter size={20} />
                </Link>
              </div> */}
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80">
              <h2 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                <span className="bg-indigo-100 p-2 rounded-full mr-3 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Consultation Hours
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80">
              <h2 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                <span className="bg-indigo-100 p-2 rounded-full mr-3 text-indigo-600">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </span>
                Our Location
              </h2>
              <p className="text-gray-700 mb-4">123 Spiritual Avenue, Harmony District, Mumbai, India</p>

              <div className="w-full h-48 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74110193988417!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1614143483933!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;