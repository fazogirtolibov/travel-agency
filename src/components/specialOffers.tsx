'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Gelasio } from 'next/font/google';
import { Roboto } from "next/font/google";

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

export default function SpecialOffers() {
  const offers = [
    { image: '/statue-liberty.png', name: 'Statue of Liberty', location: 'New York', rating: 4.8, duration: '4 Day 5 Nights', price: 450 },
    { image: '/great-wall.png', name: 'The Great Wall', location: 'China', rating: 4.9, duration: '7 Day 8 Nights', price: 850 },
    { image: '/dizin.png', name: 'Dizin', location: 'Iran', rating: 4.6, duration: '5 Day 6 Nights', price: 550 },
    { image: '/sajek-valley.png', name: 'Sajek Valley', location: 'Bangladesh', rating: 4.7, duration: '3 Day 4 Nights', price: 400 },
    { image: '/osaka-castle.png', name: 'Osaka Castle', location: 'Japan', rating: 4.7, duration: '4 Day 5 Nights', price: 700 },
  ];

  return (
    <section id="special-offers" className="py-12 mx-6">
      <div className="container mx-auto">
        <h2 className={`${gelasio.className} text-5xl mb-6 text-center`}>Special Offers</h2>
        <p className={`${roboto.className} text-gray-500 mb-8 text-center`}>With the New Year comes a refreshing sense of wanderlust, a longing in our souls to escape to warmer climates,</p>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination', // Link pagination to the external div
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <Image src={offer.image} alt={offer.name} width={300} height={192} className="w-full object-cover" />
                  <div className="p-4">
                    <h3 className={`${gelasio.className} text-2xl font-bold mb-2`}>{offer.name}</h3>
                    <p className="text-gray-600 mb-2">{offer.location}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500">★</span> {offer.rating}
                    </div>
                    <p className="text-gray-600 mb-2">{offer.duration}</p>
                    <p className="text-gray-800 font-bold">${offer.price}/person</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-12">
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}