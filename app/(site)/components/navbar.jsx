// components/Navbar.js
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Function to handle scrolling to a section
  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'  
        });
      }
    } else {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Handle hash in URL after navigation
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'  
          });
        }, 100);
      }
    }
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Services', path: '/#services', targetId: 'services' }, // Use hash in path
    { name: 'Contact Me', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo & Tagline */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Ravindra Purohit
            <h2 className="text-sm font-bold text-gray-800">
              Guidance, Growth, and Wisdom
            </h2>

          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-700 hover:text-gray-900"
              onClick={(e) => {
                if (link.targetId) {
                  e.preventDefault(); // Prevent default navigation for scroll links
                  scrollToSection(link.targetId);
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn btn-primary bg-[#FEA100] text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block text-gray-700 hover:text-gray-900"
                onClick={(e) => {
                  if (link.targetId) {
                    e.preventDefault(); // Prevent default for scroll links
                    scrollToSection(link.targetId);
                  } else {
                    setIsOpen(false); // Close menu for regular links
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block btn btn-primary bg-[#FEA100] text-white px-4 py-2 rounded hover:bg-yellow-600"
              onClick={() => setIsOpen(false)}
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;