'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Ribeye } from "next/font/google";
import { Roboto } from "next/font/google";
import { Gelasio } from "next/font/google";


const ribeye = Ribeye({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const gelasio = Gelasio({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

export default function HeaderHero() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight; // Height of the HeaderHero (100vh)
      if (window.scrollY > headerHeight) {
        setIsScrolled(true); // Scrolled past the HeaderHero
      } else {
        setIsScrolled(false); // Still within the HeaderHero
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  

  return (
    <header id="header" className="text-white">
      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-fixed"
        style={{
          backgroundImage: 'url(/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      >
        <Image
          src="/hero-background.png"
          alt="Trevland header and hero background"
          fill
          className="object-cover object-right opacity-0"
          priority
        />
      </div>
      <div className="relative w-full h-[100vh] flex flex-col">
        {/* Fixed Navbar Section */}
        <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-[var(--trevland-gray)] text-white'}`}> {/* fixed qilmadim chunki designga to'gri kelmayapti scroll down qilganda */}
          <div className="p-6">
            <div className="container m-auto px-4 sm:px-6 md: flex justify-between items-center relative z-10">
              <h1 className={`text-2xl font-bold ${ribeye.className}`}>Trevland</h1>
              <nav className="hidden sm:flex">
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <li className='mr-0 sm:mr-10'><a href="#header" className={`hover:underline ${roboto.className} text-sm`}>Home</a></li>
                  <li className='mr-0 sm:mr-10'><a href="#popular-locations" className={`hover:underline ${roboto.className}`}>Location</a></li>
                  <li className='mr-0 sm:mr-10'><a href="#special-offers" className={`hover:underline ${roboto.className}`}>Blog</a></li>
                  <li className='mr-0 sm:mr-10'><a href="#blog-news" className={`hover:underline ${roboto.className}`}>About</a></li>
                  <li className='mr-0 sm:mr-10'><a href="#footer" className={`hover:underline ${roboto.className}`}>Contact</a></li>
                </ul>
              </nav>
              <button
                onClick={() => router.push('#')}
                className="bg-[var(--trevland-red)] hover:bg-red-600 text-white font-normal py-3 px-8 rounded shadow-md hidden sm:block"
              >
                Booking now
              </button>
              {/* Burger Menu */}
              <div className="sm:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
              {/* Mobile Menu */}
              {isOpen && (
                <div className="sm:hidden absolute top-16 right-4 w-48 bg-[var(--trevland-blue)] rounded-lg shadow-lg z-20">
                  <ul className="flex flex-col space-y-2 p-4">
                    <li><a href="#header" className={`hover:underline ${roboto.className} text-sm text-white`}>Home</a></li>
                    <li><a href="#popular-locations" className={`hover:underline ${roboto.className} text-sm text-white`}>Location</a></li>
                    <li><a href="#special-offers" className={`hover:underline ${roboto.className} text-sm text-white`}>Blog</a></li>
                    <li><a href="#blog-news" className={`hover:underline ${roboto.className} text-sm text-white`}>About</a></li>
                    <li><a href="#footer" className={`hover:underline ${roboto.className} text-sm text-white`}>Contact</a></li>
                    <li>
                      <button
                        onClick={() => router.push('#')}
                        className="bg-[var(--trevland-red)] hover:bg-red-600 text-white font-normal py-2 px-4 rounded w-full mt-2"
                      >
                        Booking now
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col justify-center items-center sm:items-start max-w-3xl sm:px-6 mx-10 md:mx-30 my-0">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${gelasio.className}`}>Railtrips To Here, There And Everywhere!</h1>
          <p className={`text-lg mb-6 text-gray-300 text-center sm:text-left ${roboto.className}`}>We all wish to start our year the way possible and also according to a common belief if you have a great start to your.</p>
          <button className="bg-[var(--trevland-red)] hover:bg-red-600 text-white font-normal py-3 px-6 rounded shadow-md w-40 sm:w-48">
            Explore more
          </button>
        </div>
      </div>
    </header>
  );
}