'use client';

import HeaderHero from '@/components/headerHero';
import PopularLocations from '@/components/popularLocations';
import SpecialOffers from '@/components/specialOffers';
import BlogNews from '@/components/blogNews';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className=" flex flex-col">
      <HeaderHero />
      <PopularLocations />
      <SpecialOffers />
      <BlogNews />
      <Footer />
    </div>
  );
}