'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Create context
const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {}
});

// Spinner component that will be shown during loading
const Spinner = () => (
  <div className="loading-spinner-overlay">
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
    <style jsx>{`
      .loading-spinner-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      
      .loading-spinner {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #09f;
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

// Provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // This effect will trigger loading state when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
      
      // Simulate a loading delay
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Adjust this time as needed
      
      return () => clearTimeout(timeout);
    };
    
    handleRouteChange();
  }, [pathname, searchParams]);
  
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Spinner />}
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext);