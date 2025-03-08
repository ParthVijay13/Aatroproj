// components/TestimonialsSection.jsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TestimonialsSection() {
  // Sample testimonial data - replace with actual client feedback
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      quote: "The astrological reading I received was incredibly accurate and insightful. It helped me make important decisions about my career path with confidence.",
      image: "/images/testimonial-1.jpg",
      rating: 5,
      service: "Astrological Predictions"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      location: "Delhi, India",
      quote: "The EFT sessions have transformed how I handle stress. I've noticed significant improvements in my emotional well-being and sleep quality after just a few sessions.",
      image: "/images/testimonial-2.jpg",
      rating: 5,
      service: "EFT Tapping Sessions"
    },
    {
      id: 3,
      name: "Ananya Desai",
      location: "Bangalore, India",
      quote: "I was skeptical at first, but the personalized consultation provided me with clarity during a difficult time. The guidance was practical and deeply meaningful.",
      image: "/images/testimonial-3.jpg",
      rating: 5,
      service: "Personalized Consultations"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur, India",
      quote: "The professional advice I received helped me navigate a complex family situation. I'm grateful for the wisdom and compassion shown during our sessions.",
      image: "/images/testimonial-4.jpg",
      rating: 4,
      service: "Professional Advice"
    }
  ];

  // State for mobile testimonial carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile navigation functions
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-4 w-4 ${i < rating ? 'text-amber-500' : 'text-amber-200'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circular decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 opacity-10 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b45309' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Decorative element */}
          <div className="flex justify-center mb-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">Client Testimonials</h2>
          <p className="text-lg text-amber-800/80 max-w-2xl mx-auto">
            Discover how my services have helped clients find clarity, peace, and direction in their lives.
          </p>
        </div>

        {/* Desktop and Tablet View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl border border-amber-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-70 blur-sm"></div>
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                        {/* <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        /> */}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900">{testimonial.name}</h3>
                      <p className="text-xs text-amber-700/70">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                    {testimonial.service}
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-amber-800 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden mb-10">
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl border border-amber-200 shadow-md p-6">
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-70 blur-sm"></div>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">{testimonials[activeIndex].name}</h3>
                  <p className="text-xs text-amber-700/70">{testimonials[activeIndex].location}</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                {testimonials[activeIndex].service}
              </div>
            </div>
            
            <div className="flex mb-4">
              {renderStars(testimonials[activeIndex].rating)}
            </div>
            
            <p className="text-amber-800 italic leading-relaxed mb-6">"{testimonials[activeIndex].quote}"</p>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-xs text-amber-700/70 font-medium">
                {activeIndex + 1} / {testimonials.length}
              </span>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/testimonials">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center group">
              <span>Read More Success Stories</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      
      {/* Decorative Om symbol at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate.x-1/2 opacity-10">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM40.9 39.5C39.8 41.5 38.2 43.1 36.3 44.1C34.3 45.1 32.2 45.6 30 45.6C27.8 45.6 25.7 45.1 23.7 44.1C21.8 43.1 20.2 41.5 19.1 39.5C18 37.5 17.4 35.3 17.4 33C17.4 30.7 18 28.5 19.1 26.5C20.2 24.5 21.8 22.9 23.7 21.9C24.6 21.4 25.5 21 26.5 20.8C23.9 22.9 22.2 26 22.2 29.4C22.2 34.7 26.5 39 31.8 39C37.1 39 41.4 34.7 41.4 29.4C41.4 26 39.7 22.9 37.1 20.8C38.1 21 39 21.4 39.9 21.9C41.8 22.9 43.4 24.5 44.5 26.5C45.6 28.5 46.2 30.7 46.2 33C46.2 35.3 45.6 37.5 44.5 39.5H40.9Z" fill="#B45309"/>
          <path d="M31.8 24.6C29.2 24.6 27.1 26.7 27.1 29.3C27.1 31.9 29.2 34 31.8 34C34.4 34 36.5 31.9 36.5 29.3C36.5 26.7 34.4 24.6 31.8 24.6Z" fill="#B45309"/>
        </svg>
      </div>
    </section>
  );
}