"use client"

import { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Handle clicking outside the modal to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Handle pressing Escape key to close modal
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-of-service-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close terms of service"
        >
          <IoClose size={24} />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h1 id="terms-of-service-title" className="text-2xl font-bold text-indigo-900 mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Welcome to <strong>www.ravindrapurohit.com</strong>. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to these Terms of Service and any additional terms that may apply. If you do not agree with these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. Service Description</h2>
              <p>
                We provide astrological insights, emotional well-being techniques, professional advice, and related content through our website, blogs, and consultation services. Our services are intended for informational and educational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. User Responsibilities</h2>
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information when using our services</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not interfere with the proper functioning of the website</li>
                <li>Respect the intellectual property rights associated with our content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Disclaimer</h2>
              <p>
                The information provided through our services is for general informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk.
              </p>
              <p className="mt-2">
                Our astrological insights and professional advice should not be considered as a substitute for professional medical, legal, financial, or psychological advice. Always seek the advice of qualified professionals regarding specific questions or concerns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. Intellectual Property</h2>
              <p>
                All content, including text, graphics, logos, images, and software, is the property of Ravindra Purohit or our content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">6. Privacy Policy</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes by posting an announcement on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">9. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">10. Contact Information</h2>
              <p>
                For questions or concerns regarding these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> ravindrapurohit@gmail.com<br />
                <strong>Website:</strong> www.ravindrapurohit.com
              </p>
            </section>
          </div>

          {/* Footer with close button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;