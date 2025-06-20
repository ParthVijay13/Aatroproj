// components/MainBanner.js
import Link from 'next/link';

const MainBanner = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b45309' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '150px 150px'
             }}>
        </div>
        
        {/* Circular gold gradient elements */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 opacity-20 blur-3xl"></div>
        
        {/* Sandalwood-like texture overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b45309' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="max-w-3xl text-center">
          {/* Decorative element above heading */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
            Transform Your Life with <span><b>Personalized Guidance and Ancient Wisdom</b></span>
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-amber-800 max-w-2xl mx-auto">
            Astrological insights, emotional well-being techniques, and professional advice tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Schedule Consultation
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
          </div>
          
          {/* Decorative Om symbol */}
          <div className="mt-16 flex justify-center opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM40.9 39.5C39.8 41.5 38.2 43.1 36.3 44.1C34.3 45.1 32.2 45.6 30 45.6C27.8 45.6 25.7 45.1 23.7 44.1C21.8 43.1 20.2 41.5 19.1 39.5C18 37.5 17.4 35.3 17.4 33C17.4 30.7 18 28.5 19.1 26.5C20.2 24.5 21.8 22.9 23.7 21.9C24.6 21.4 25.5 21 26.5 20.8C23.9 22.9 22.2 26 22.2 29.4C22.2 34.7 26.5 39 31.8 39C37.1 39 41.4 34.7 41.4 29.4C41.4 26 39.7 22.9 37.1 20.8C38.1 21 39 21.4 39.9 21.9C41.8 22.9 43.4 24.5 44.5 26.5C45.6 28.5 46.2 30.7 46.2 33C46.2 35.3 45.6 37.5 44.5 39.5H40.9Z" fill="#B45309"/>
              <path d="M31.8 24.6C29.2 24.6 27.1 26.7 27.1 29.3C27.1 31.9 29.2 34 31.8 34C34.4 34 36.5 31.9 36.5 29.3C36.5 26.7 34.4 24.6 31.8 24.6Z" fill="#B45309"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;