'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center gap-8">
      <Link 
        href="/" 
        className="text-white/80 hover:text-white transition-colors duration-200"
      >
        Home
      </Link>
      
      {/* People Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 text-white/80 hover:text-white transition-colors duration-200"
          onBlur={(e) => {
            // Close dropdown when clicking outside
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setTimeout(() => setIsDropdownOpen(false), 150);
            }
          }}
        >
          People
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-[#0d2430] border border-white/10 rounded-lg shadow-xl backdrop-blur-xl z-50">
            <div className="py-2">
              <Link
                href="/people/allergies"
                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-[#FDE035]/10 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Allergies
              </Link>
              <Link
                href="/people/stuttering"
                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-[#FDE035]/10 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Stuttering
              </Link>
              <Link
                href="/people/cognitive-loss"
                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-[#FDE035]/10 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Cognitive Loss
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <Link 
        href="/athletes" 
        className="text-white/80 hover:text-white transition-colors duration-200"
      >
        Athletes
      </Link>
      
      <Link 
        href="/pets" 
        className="text-white/80 hover:text-white transition-colors duration-200"
      >
        Pets
      </Link>
    </nav>
  );
}