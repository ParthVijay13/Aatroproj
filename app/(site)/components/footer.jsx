// components/Footer.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';
const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for modals
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);


  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${PAYLOAD_API_URL}/newsletter-subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('You have successfully subscribed to our newsletter!', {
          duration: 5000,
          position: 'bottom-center',
          icon: '🎉',
        });
        setEmail('');
      } else {
        // Payload returns errors in `data.errors` array
        const errorMessage = data.errors?.[0]?.message || 'Subscription failed. Please try again.';
        toast.error(errorMessage, {
          duration: 5000,
          position: 'bottom-center',
        });
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Something went wrong. Please try again later.', {
        duration: 5000,
        position: 'bottom-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-indigo-100">
      <Toaster />
      <PrivacyPolicyModal 
        isOpen={isPrivacyPolicyOpen} 
        onClose={() => setIsPrivacyPolicyOpen(false)} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsOfServiceOpen} 
        onClose={() => setIsTermsOfServiceOpen(false)} 
      />
      <div className="text-indigo-200">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 48" 
          fill="none" 
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path 
            d="M0 48H1440V0C1440 0 1320 24 1200 24C1080 24 1020 0 900 0C780 0 720 24 600 24C480 24 420 0 300 0C180 0 120 24 0 24V48Z" 
            fill="currentColor" 
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-indigo-900">Ravindra Purohit</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Guiding your journey with ancient wisdom and modern insights for a balanced, purposeful life.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-900">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link></li>
              <li><Link href="/blogs" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-900">Stay Connected</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Subscribe to receive insights, updates, and special offers.
            </p>
            <form className="space-y-3 max-w-md" onSubmit={handleNewsletterSubmit}>
              <div className="flex items-center">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 text-white py-2 w-full rounded-l-md border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm " // Fixed text-white to text-gray-900 for visibility
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  className={`${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-4 py-2 rounded-r-md transition-colors flex items-center justify-center min-w-[48px]`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    "→"
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>
        <div className="border-t border-indigo-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-600 mb-4 md:mb-0">© {currentYear} Ravindra Purohit. All rights reserved.</p>
          <div className="flex space-x-6">
          <button 
              className="text-gray-600 text-sm hover:text-indigo-600 transition-colors bg-transparent border-none cursor-pointer"
              onClick={() => setIsPrivacyPolicyOpen(true)}
            >
              Privacy Policy
            </button>
            <button 
              className="text-gray-600 text-sm hover:text-indigo-600 transition-colors bg-transparent border-none cursor-pointer"
              onClick={() => setIsTermsOfServiceOpen(true)}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;