// app/testimonials/page.jsx
// import TestimonialsSection from '@/components/TestimonialsSection';
import TestimonialsSection from '../components/testimonialsSection';
import Image from 'next/image';

export const metadata = {
  title: 'Testimonials | Ravindra Purohit',
  description: 'Read success stories and testimonials from clients who have benefited from our spiritual guidance and astrological services.',
}

export default function TestimonialsPage() {
  // Extended testimonials for the full page
  const extendedTestimonials = [
    {
      id: 5,
      name: "Meera Kapoor",
      location: "Pune, India",
      quote: "I've been consulting with Ravindra ji for over two years now, and his guidance has been transformative. His astrological insights helped me understand my strengths and challenges, leading to significant personal growth. The combination of ancient wisdom with practical advice makes his consultations incredibly valuable.",
      image: "/images/testimonial-5.jpg",
      rating: 5,
      service: "Astrological Predictions",
      longQuote: true
    },
    {
      id: 6,
      name: "Arnav Mehta",
      location: "Hyderabad, India",
      quote: "After struggling with anxiety for years, the EFT tapping sessions provided me with tools to manage my emotions effectively. I've seen a remarkable improvement in my mental wellbeing. Ravindra ji's calm and supportive approach made the experience comfortable and healing.",
      image: "/images/testimonial-6.jpg",
      rating: 5,
      service: "EFT Tapping Sessions",
      longQuote: true
    },
    {
      id: 7,
      name: "Leela Nair",
      location: "Chennai, India",
      quote: "The career guidance I received was eye-opening. The astrological analysis aligned perfectly with my abilities and interests, helping me make a career change that has brought fulfillment and success. I appreciate the detailed explanations and thoughtful recommendations.",
      image: "/images/testimonial-7.jpg",
      rating: 5,
      service: "Professional Advice",
      longQuote: true
    }
  ];

  return (
    <main>
      {/* Hero section with celestial background */}
      <div className="relative py-16 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/celestial-bg.jpg" 
            alt="Celestial background" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 to-purple-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h1>
            <p className="text-lg text-indigo-100 max-w-3xl mx-auto">
              Discover how our services have helped clients across India find clarity,
              peace, and direction in their personal and professional lives.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 opacity-20">
            <Image 
              src="/images/zodiac-wheel.svg" 
              alt="Zodiac wheel" 
              width={160} 
              height={160} 
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20">
            <Image 
              src="/images/stars-pattern.svg" 
              alt="Stars pattern" 
              width={160} 
              height={160} 
            />
          </div>
        </div>
      </div>
      
      {/* Featured Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="container px-4 mx-auto relative">
          {/* Subtle background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 z-0">
            <div className="absolute top-10 left-10">
              <Image 
                src="/images/moon-phase.svg" 
                alt="Moon phase" 
                width={120} 
                height={120} 
              />
            </div>
            <div className="absolute bottom-10 right-10">
              <Image 
                src="/images/constellation.svg" 
                alt="Constellation" 
                width={200} 
                height={200} 
              />
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">What Our Clients Say</h2>
              <p className="text-lg text-indigo-800/80 max-w-2xl mx-auto">
                Authentic testimonials from those who have experienced transformation through our guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {/* Replace TestimonialsSection with directly rendered testimonial cards */}
              {[1, 2, 3].map((id) => (
                <div 
                  key={id}
                  className="card bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-md hover:shadow-indigo-200/50 transition-shadow duration-300"
                >
                  <div className="card-body p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 h-12 rounded-full ring ring-purple-200 ring-offset-base-100 ring-offset-2">
                            <Image
                              src={`/images/testimonial-${id}.jpg`}
                              alt="Client"
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-indigo-900">Client Name</h3>
                          <p className="text-xs text-indigo-600/70">Location, India</p>
                        </div>
                      </div>
                      <div className="badge bg-purple-100 text-purple-800 border-purple-200">Service Type</div>
                    </div>
                    
                    <div className="flex mb-3">
                      {Array(5).fill(0).map((_, i) => (
                        <svg 
                          key={i}
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 text-amber-400" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-sm italic text-indigo-800">"The astrological reading I received was incredibly accurate and insightful. It helped me make important decisions about my career path with confidence."</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Testimonials Section with cosmic background */}
      <section className="py-16 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/night-sky-bg.jpg" 
            alt="Night sky background" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-purple-900/90"></div>
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Video Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* These would be actual video components in implementation */}
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="btn btn-circle btn-lg bg-purple-500/80 hover:bg-purple-600 border-none shadow-lg shadow-purple-800/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <Image 
                  src="/images/video-thumbnail-1.jpg" 
                  alt="Video Testimonial" 
                  width={400} 
                  height={225} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-body bg-gradient-to-b from-white/5 to-white/10">
                <h3 className="card-title text-lg text-white">Spiritual Transformation Journey</h3>
                <p className="text-sm text-indigo-100/80">Sunita shares how astrological guidance helped her spiritual growth</p>
              </div>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="btn btn-circle btn-lg bg-purple-500/80 hover:bg-purple-600 border-none shadow-lg shadow-purple-800/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <Image 
                  src="/images/video-thumbnail-2.jpg" 
                  alt="Video Testimonial" 
                  width={400} 
                  height={225} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-body bg-gradient-to-b from-white/5 to-white/10">
                <h3 className="card-title text-lg text-white">Finding Balance Through EFT</h3>
                <p className="text-sm text-indigo-100/80">Rajesh discusses how EFT tapping changed his approach to stress</p>
              </div>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="btn btn-circle btn-lg bg-purple-500/80 hover:bg-purple-600 border-none shadow-lg shadow-purple-800/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <Image 
                  src="/images/video-thumbnail-3.jpg" 
                  alt="Video Testimonial" 
                  width={400} 
                  height={225} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-body bg-gradient-to-b from-white/5 to-white/10">
                <h3 className="card-title text-lg text-white">Career Success Story</h3>
                <p className="text-sm text-indigo-100/80">Ananya explains how astrological guidance led to career breakthroughs</p>
              </div>
            </div>
          </div>
          
          {/* Decorative stars */}
          <div className="absolute top-20 left-10 w-6 h-6 opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-300">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-40 right-10 w-4 h-4 opacity-40">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-300">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-300">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Extended Written Testimonials with subtle celestial background */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-purple-50 to-indigo-50">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <Image 
            src="/images/astrology-pattern.jpg" 
            alt="Astrology pattern" 
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Featured Client Stories</h2>
          
          <div className="space-y-8">
            {extendedTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="card bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="card-body">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex items-start gap-4 lg:w-1/4">
                      <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-purple-300 ring-offset-2">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-indigo-900">{testimonial.name}</h3>
                        <p className="text-sm text-indigo-600/70">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {Array(5).fill(0).map((_, i) => (
                            <svg 
                              key={i}
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="badge bg-purple-100 text-purple-800 border-purple-200 mt-2">{testimonial.service}</div>
                      </div>
                    </div>
                    
                    <div className="lg:w-3/4">
                      <p className="text-base italic text-indigo-800">"{testimonial.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action section */}
      <section className="py-12 bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-center">
        <div className="container px-4 mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
          <p className="mb-6 text-indigo-100">Book a consultation and begin your journey to clarity and spiritual growth.</p>
          <button className="btn bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white border-none shadow-lg shadow-amber-700/20">
            Book a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}