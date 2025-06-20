// components/IntroductionSection.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function IntroductionSection({
  name,
  shortBio,
  imageUrl,
  imageAlt,
  learnMoreUrl,
}) {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 py-16 relative overflow-hidden">
      {/* Sacred geometry pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/sacred-geometry.svg')] bg-repeat opacity-5"></div>
      
      {/* Soft radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-radial from-amber-200/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Profile Image with spiritual gold/sandalwood border */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-amber-300/60 via-amber-500/40 to-orange-600/60 rounded-full blur-md"></div>
            
            {/* Inner golden border */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-amber-100 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-500/20 z-10"></div>
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 192px, 288px"
                priority
                className="object-cover"
                style={{
                  objectPosition: 'center top',
                }}
              />
            </div>
            
            {/* Spiritual symbol */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-amber-800">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2V22" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
              </svg>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute top-0 -left-8 w-6 h-6 rounded-full bg-amber-300/40"></div>
            <div className="absolute bottom-8 -left-6 w-4 h-4 rounded-full bg-orange-300/40"></div>
          </div>
          
          {/* Text content with spiritual styling */}
          <div className="max-w-md lg:max-w-xl text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-amber-800 text-sm md:text-base uppercase tracking-widest font-medium">Spiritual Guide</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900">
                Namaste, I'm <span className="bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">{name}</span>
              </h1>
            </div>
            
            {/* Decorative divider with Om symbol */}
            <div className="flex items-center md:justify-start justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
              <div className="mx-2 text-amber-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.4"/>
                  <path d="M13,11.59V11a3,3,0,0,0-2-2.82V7a1,1,0,0,0-2,0V9a1,1,0,0,0,1,1,1,1,0,0,1,1,1v.59a3.45,3.45,0,0,0-1.5,6.63A3.49,3.49,0,0,0,13,11.59ZM12,15a1,1,0,1,1,1-1A1,1,0,0,1,12,15Z"/>
                </svg>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
            
            <p className="text-lg text-amber-900/80 leading-relaxed font-light">
              {shortBio}
            </p>
            <br />
            
            <Link href={learnMoreUrl}>
              <button className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-amber-50 rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 group">
                <span>Discover My Journey</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative spiritual elements */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-amber-500/10 via-orange-400/5 to-amber-500/10"></div>
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-radial from-amber-300/20 to-transparent"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-radial from-orange-300/10 to-transparent"></div>
      
      {/* Sacred symbols */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-amber-800">
          <path d="M12,2L4.5,20.29L5.21,21L18.79,21L19.5,20.29L12,2Z"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-1/5 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-amber-800">
          <path d="M12,8L15.22,14.27L22,15.11L17,19.92L18.11,26.68L12,23.5L5.89,26.68L7,19.92L2,15.11L8.78,14.27L12,8Z"/>
        </svg>
      </div>
    </section>
  );
}