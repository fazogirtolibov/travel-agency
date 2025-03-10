'use client';

import { Gelasio } from 'next/font/google';
import { Roboto } from "next/font/google";
import Image from 'next/image';


const gelasio = Gelasio({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});


type Location = {
  image: string;
  name: string;
  description: string;
};

export default function PopularLocations() {
  const locations: Location[] = [
    { image: '/istanbul.png', name: 'Istanbul, Turkey', description: 'Istanbul is a major city in Turkey that straddles Europe.' },
    { image: '/kuala-lumpur.png', name: 'Kuala Lumpur, Malaysia', description: 'A 272-step long trek leads you to this century.' },
    { image: '/seoul.png', name: 'Seoul, South Korea', description: 'South Korea officially the Republic of Korea is a country in East Asia.' },
  ];

  return (
    <section id="popular-locations" className="py-12 mx-6">
      <div className="container mx-auto">
        <h2 className={`${gelasio.className} text-5xl mb-6 text-center`}>Popular Location</h2>
        <p className={`${roboto.className} text-gray-500 mb-8 text-center`}>For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and voyagers—from island hopping in the</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-2 gap-3 lg:grid-cols-2 gap-5 xl:grid-cols-3 gap-5">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg hover:border-gray-300 hover:scale-105 transition-transform duration-300 max-w-[300px] sm:max-w-[300px]  md:max-w-[360px] max-h-[400px] sm:max-h-[400px] md:max-h-[500px]"
              style={{ width: '360px', height: '500px' }} 
            >
              <Image
                src={location.image}
                alt={location.name}
                width={360} 
                height={300} 
                className="w-full object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className={`${gelasio.className} text-xl font-bold mb-2`}>{location.name}</h3>
                <p className={`${roboto.className} text-gray-500`}>{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}