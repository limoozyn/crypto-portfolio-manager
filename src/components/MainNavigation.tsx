'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function MainNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-primary-dark dark:text-primary-light">
                CryptoTracker
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  pathname === '/' 
                    ? 'border-primary-dark dark:border-primary-light text-gray-900 dark:text-white font-medium' 
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                Cryptocurrencies
              </Link>
              <Link 
                href="/portfolio" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  pathname === '/portfolio' 
                    ? 'border-primary-dark dark:border-primary-light text-gray-900 dark:text-white font-medium' 
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                My Portfolio
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            
            <button 
              className="ml-2 sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                pathname === '/'
                  ? 'border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light bg-primary-50 dark:bg-gray-700'
                  : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Cryptocurrencies
            </Link>
            <Link
              href="/portfolio"
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                pathname === '/portfolio'
                  ? 'border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light bg-primary-50 dark:bg-gray-700'
                  : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              My Portfolio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}