"use client"

import { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
        aria-labelledby="privacy-policy-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close privacy policy"
        >
          <IoClose size={24} />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h1 id="privacy-policy-title" className="text-2xl font-bold text-indigo-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Welcome to <strong>www.ravindrapurohit.com</strong> ("Website"). Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our Website and interact with our services, including blogs, astrological insights, emotional well-being techniques, and professional advice.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              
              <h3 className="text-lg font-medium text-indigo-700 mt-4 mb-2">1.1 Personal Information:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, and contact details when you subscribe to our newsletter or contact us.</li>
                <li>Information you provide when requesting personalized astrological insights or professional advice.</li>
              </ul>
              
              <h3 className="text-lg font-medium text-indigo-700 mt-4 mb-2">1.2 Non-Personal Information:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser type, IP address, device information, and browsing behavior collected via cookies and analytics tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide and improve our services, including personalized insights and recommendations.</li>
                <li>To communicate with you regarding updates, promotions, or newsletters (with your consent).</li>
                <li>To analyze Website traffic and enhance user experience.</li>
                <li>To comply with legal obligations and protect against fraudulent activities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance user experience. These help us analyze Website performance and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. How We Share Your Information</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your data in the following cases:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>With service providers who assist in Website maintenance, analytics, and email services.</li>
                <li>If required by law, legal process, or governmental request.</li>
                <li>To protect our rights, safety, and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no online platform is 100% secure, and we encourage you to use strong passwords and be cautious while sharing sensitive data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">6. Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites. We are not responsible for their privacy policies or practices. We recommend reviewing their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">7. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of email communications by clicking the "unsubscribe" link.</li>
                <li>Disable cookies through your browser settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. Continued use of the Website constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">9. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, you can contact us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> ravindrapurohit@gmail.com<br />
                <strong>Website:</strong> www.ravindrapurohit.com
              </p>
            </section>

            <p className="italic">
              By using our Website, you agree to this Privacy Policy and consent to the collection and use of your information as outlined above.
            </p>
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

export default PrivacyPolicyModal;