// components/FAQSection.js
import React from 'react';

// Dynamic FAQ data (minimum 5 questions)
const faqData = [
  {
    question: "What services do you offer?",
    answer: "I offer astrological predictions, EFT tapping sessions, professional advice, and personalized consultations tailored to your needs.",
  },
  {
    question: "How can I book a consultation?",
    answer: "You can easily book a consultation by clicking on the 'Book a Consultation' button on the homepage or visiting our contact page.",
  },
  {
    question: "Do you offer online sessions?",
    answer: "Yes, all sessions are available online, ensuring that you can receive guidance from anywhere in the world.",
  },
  {
    question: "What is the payment process?",
    answer: "Payments can be made securely through PayPal, Stripe, or Razorpay. We also offer multiple payment options to suit your preferences.",
  },
  {
    question: "How long does a typical session last?",
    answer: "A typical session lasts between 45 minutes to 1 hour, depending on the type of consultation and your specific needs.",
  },
  // You can add more questions here if needed
];

const FAQSection = () => {
  return (
    <section className="py-16 relative">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b45309' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '150px 150px'
             }}>
        </div>
        
        {/* Circular gold gradient elements */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 opacity-15 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          {/* Decorative element */}
          <div className="flex justify-center mb-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-amber-800/80 max-w-2xl mx-auto">
            Find answers to common questions about my services and consultation process.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-80 backdrop-blur-sm border border-amber-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <details className="cursor-pointer">
                <summary className="flex items-center justify-between p-5 text-amber-900 font-medium">
                  <span className="text-lg">{faq.question}</span>
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-amber-700 transform group-open:rotate-180 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="p-5 pt-0 border-t border-amber-100">
                  <p className="text-amber-800">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
        
        {/* Additional help section */}
        <div className="mt-12 text-center">
          <p className="text-amber-800 mb-3">
            Didn't find what you were looking for?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium group"
          >
            <span>Contact me with your question</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Decorative Om symbol at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-10">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM40.9 39.5C39.8 41.5 38.2 43.1 36.3 44.1C34.3 45.1 32.2 45.6 30 45.6C27.8 45.6 25.7 45.1 23.7 44.1C21.8 43.1 20.2 41.5 19.1 39.5C18 37.5 17.4 35.3 17.4 33C17.4 30.7 18 28.5 19.1 26.5C20.2 24.5 21.8 22.9 23.7 21.9C24.6 21.4 25.5 21 26.5 20.8C23.9 22.9 22.2 26 22.2 29.4C22.2 34.7 26.5 39 31.8 39C37.1 39 41.4 34.7 41.4 29.4C41.4 26 39.7 22.9 37.1 20.8C38.1 21 39 21.4 39.9 21.9C41.8 22.9 43.4 24.5 44.5 26.5C45.6 28.5 46.2 30.7 46.2 33C46.2 35.3 45.6 37.5 44.5 39.5H40.9Z" fill="#B45309"/>
          <path d="M31.8 24.6C29.2 24.6 27.1 26.7 27.1 29.3C27.1 31.9 29.2 34 31.8 34C34.4 34 36.5 31.9 36.5 29.3C36.5 26.7 34.4 24.6 31.8 24.6Z" fill="#B45309"/>
        </svg>
      </div>
    </section>
  );
};

export default FAQSection;