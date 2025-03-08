// components/ServicesOverview.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesOverview() {
  const services = [
    {
      id: 'astrology',
      title: 'Astrological Predictions',
      description: 'Gain insights into your future and understand your life path through personalized astrological readings based on your birth chart.',
      icon: '/images/astrology-icon.svg', // Replace with actual icon path
      iconBg: 'bg-amber-50',
      borderColor: 'border-amber-100',
    },
    {
      id: 'eft',
      title: 'EFT Tapping Sessions',
      description: 'Release emotional blockages and reduce stress with guided Emotional Freedom Technique sessions tailored to your specific needs.',
      icon: '/images/eft-icon.svg', // Replace with actual icon path
      iconBg: 'bg-amber-50',
      borderColor: 'border-amber-100',
    },
    {
      id: 'advice',
      title: 'Professional Advice',
      description: "Navigate life's challenges with clarity through personalized guidance drawing from ancient wisdom and modern techniques.",
      icon: '/images/advice-icon.svg', // Replace with actual icon path
      iconBg: 'bg-amber-50',
      borderColor: 'border-amber-100',
    },
    {
      id: 'consultations',
      title: 'Personalized Consultations',
      description: 'Experience comprehensive one-on-one sessions addressing your specific concerns and creating a roadmap for your journey ahead.',
      icon: '/images/consultation-icon.svg', // Replace with actual icon path
      iconBg: 'bg-amber-50',
      borderColor: 'border-amber-100',
    },
  ];

  return (
    <section className="py-20 relative"  id="services">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b45309' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
        
        {/* Circular gold gradient elements */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Decorative element */}
          <div className="flex justify-center mb-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">Services Overview</h2>
          <p className="text-lg text-amber-800/80 max-w-2xl mx-auto">
            Discover my range of services designed to guide you through life's journey with clarity, 
            wisdom, and personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-white bg-opacity-70 backdrop-blur-sm rounded-xl border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 -translate-y-8 translate-x-8 rotate-45 transform group-hover:translate-y-[-20px] group-hover:translate-x-[20px] transition-transform duration-500"></div>
              
              <div className="p-8 flex flex-col items-center text-center h-full">
                {/* Icon with glowing effect */}
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className={`relative w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center border border-amber-200`}>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="object-contain text-amber-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">{service.title}</h3>
                <p className="text-amber-800/80 text-base mb-6 flex-grow">{service.description}</p>
                
                {/* <Link 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {/* <Link href="/services">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center group">
              <span>Explore All Services</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link> */}
        </div>
      </div>
      
      {/* Decorative Om symbol at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-10">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM40.9 39.5C39.8 41.5 38.2 43.1 36.3 44.1C34.3 45.1 32.2 45.6 30 45.6C27.8 45.6 25.7 45.1 23.7 44.1C21.8 43.1 20.2 41.5 19.1 39.5C18 37.5 17.4 35.3 17.4 33C17.4 30.7 18 28.5 19.1 26.5C20.2 24.5 21.8 22.9 23.7 21.9C24.6 21.4 25.5 21 26.5 20.8C23.9 22.9 22.2 26 22.2 29.4C22.2 34.7 26.5 39 31.8 39C37.1 39 41.4 34.7 41.4 29.4C41.4 26 39.7 22.9 37.1 20.8C38.1 21 39 21.4 39.9 21.9C41.8 22.9 43.4 24.5 44.5 26.5C45.6 28.5 46.2 30.7 46.2 33C46.2 35.3 45.6 37.5 44.5 39.5H40.9Z" fill="#B45309"/>
          <path d="M31.8 24.6C29.2 24.6 27.1 26.7 27.1 29.3C27.1 31.9 29.2 34 31.8 34C34.4 34 36.5 31.9 36.5 29.3C36.5 26.7 34.4 24.6 31.8 24.6Z" fill="#B45309"/>
        </svg>
      </div>
    </section>
  );
}