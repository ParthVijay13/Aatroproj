"use client"

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
// export async function generateMetadata() {
//   return {
//     title: "About",
//   };
// }
const About = () => {
  
  return (
    <>
    <Head>
      <title>Ravindra Purohit | About</title>
    </Head>
    <main className="min-h-screen bg-yellow-50">
      {/* Hero section with gradient overlay */}
      <section className="relative py-16 mb-10 overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/celestial-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Ravindra Purohit</h1>
          <p className="text-lg text-yellow-50 max-w-2xl mx-auto">
            Guiding souls through life's journey with wisdom, compassion, and ancient knowledge
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Section 1: Full Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden backdrop-blur-sm bg-opacity-80">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative h-96 md:h-auto">
                <Image
                  src="/images/Aboutphoto.jpg"
                  alt="Ravindra Purohit"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/40 to-transparent"></div>
              </div>
              <div className="md:w-3/5 p-8 md:p-10">
                <div className="flex items-center mb-4">
                  <div className="h-0.5 w-10 bg-yellow-500 mr-3"></div>
                  <h2 className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">My Journey</h2>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-yellow-900">A Lifetime Dedicated to Spiritual Guidance</h3>
                <div className="prose text-gray-700">
                  <p className="mb-4">
                    Welcome to my corner of the web! I am Ravindra Purohit, a lifelong learner, author, and seeker of knowledge with a deep passion for exploring life's profound truths.
                  </p>
                  <p className="mb-4">
                    Through my journey, I have delved into diverse fields like spirituality, emotional well-being, and self-development, inspiring me to write books on topics such as EFT Tapping, Sanatan culture, and the ancient wisdom of Shiv Swarodaya Shastra.
                  </p>
                  <p className="mb-4">
                    In addition to sharing my reflections and insights through this blog, I also provide personalized astrological predictions and valuable professional advice to my clients, helping them navigate life's challenges with clarity and confidence.
                  </p>
                  <p>
                    This platform is dedicated to offering wisdom, guidance, and tools for personal growth and transformation. Join me as I explore the intricate paths of self-discovery, blending ancient knowledge with modern insights to empower lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mission and Vision */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/zodiac-wheel.svg"
                alt="Zodiac wheel background"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">My Mission & Vision</h2>
              <p className="text-lg text-yellow-50 mb-6 max-w-3xl mx-auto">
                My mission is to empower individuals with the insights and tools needed to lead fulfilling lives. I envision a world where ancient wisdom meets modern practices to create balanced, purposeful living.
              </p>
              <p className="text-lg text-yellow-50 mb-8 max-w-3xl mx-auto">
                Through my work, I strive to create a positive impact, guiding you on a journey of self-discovery, healing, and growth.
              </p>
              {/* <Link href="/services">
                <button className="bg-white text-yellow-700 hover:bg-yellow-100 border-none shadow-lg px-6 py-3">
                  Explore My Services
                </button>
              </Link> */}
            </div>
          </div>
        </section>

        {/* Section 3: Achievements */}
        {/* <section>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-2">
              <div className="h-0.5 w-10 bg-yellow-500"></div>
            </div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-3">Achievements & Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A glimpse into the milestones that define my journey and the success stories that inspire my path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">




            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-52">
                <Image
                  src="/images/book.jpg"
                  alt="Published Book"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6">Published Book</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Explore the transformative insights and techniques shared in my best-selling book "Journey Within: Finding Your Path Through Ancient Wisdom."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-600 font-medium">National Bestseller</span>
                  <Link href="/books" className="text-yellow-600 hover:text-yellow-800 font-medium text-sm">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </div>




            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-52">
                <Image
                  src="/images/success.jpg"
                  alt="Client Success"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6">Client Success</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Read inspiring testimonials from over 5,000 clients whose lives have been transformed through my guidance and personalized consultations.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-600 font-medium">5000+ Clients</span>
                  <Link href="/testimonials" className="text-yellow-600 hover:text-yellow-800 font-medium text-sm">
                    Read Stories &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-52">
                <Image
                  src="/images/achievement.jpg"
                  alt="Notable Achievement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6">Notable Achievements</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Celebrating the milestones and awards that highlight the impact of my work, including recognition from spiritual and wellness communities.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-600 font-medium">Award Winning</span>
                  <Link href="/achievements" className="text-yellow-600 hover:text-yellow-800 font-medium text-sm">
                    View All &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Section 4: Spiritual Philosophy */}
        <section className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm bg-opacity-80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <Image
                src="/images/moon-phase.svg"
                alt="Moon phases"
                width={256}
                height={256}
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-10 bg-yellow-500 mr-3"></div>
                <h2 className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">My Philosophy</h2>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-900">A Holistic Approach to Spiritual Guidance</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-yellow-800">Blending Ancient & Modern</h4>
                  <p className="text-gray-700 mb-6">
                    My approach combines ancient astrological knowledge with modern psychological insights, creating a comprehensive framework for personal growth. This integration allows for deeper understanding of life's patterns and challenges.
                  </p>

                  <h4 className="text-lg font-semibold mb-3 text-yellow-800">Personalized Guidance</h4>
                  <p className="text-gray-700">
                    I believe that each individual's journey is unique. That's why I tailor my guidance to your specific circumstances, challenges, and aspirations. Your birth chart is as unique as your fingerprint, and understanding it requires personal attention.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-yellow-800">Empowerment Through Knowledge</h4>
                  <p className="text-gray-700 mb-6">
                    True transformation comes when you understand the forces at play in your life. I don't just predict events; I empower you with knowledge that helps you make informed choices and take charge of your destiny.
                  </p>

                  <h4 className="text-lg font-semibold mb-3 text-yellow-800">Emotional Well-being</h4>
                  <p className="text-gray-700">
                    Spiritual growth and emotional health are deeply connected. Through techniques like EFT tapping and guided meditation, I help you release emotional blockages and achieve the inner harmony needed for true spiritual advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl shadow-xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/stars-pattern.svg"
                alt="Stars pattern background"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Begin Your Transformative Journey Today</h2>
              <p className="text-lg text-yellow-50 mb-8 max-w-2xl mx-auto">
                Take the first step towards clarity, purpose, and inner peace. Connect with me for a personalized consultation.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/contact">
                  <button className="bg-white text-yellow-700 hover:bg-yellow-100 border-none px-6 py-3">
                    Contact Me
                  </button>
                </Link>
                {/* <Link href="/contact">
                  <button className="border border-white text-white hover:bg-white hover:text-yellow-700 px-6 py-3">
                    Contact Me
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
};

export default About;
