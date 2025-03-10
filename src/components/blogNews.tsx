'use client';

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

type BlogPost = {
  image: string;
  title: string;
  description: string;
  author: string;
};

export default function BlogNews() {
  const posts: BlogPost[] = [
    { image: '/banff-park.png', title: 'Banff National Park', description: 'Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada’s most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible.', author: '@thomasalva_adison' },
    { image: '/hiroshima.png', title: 'The Hiroshima Peace!', description: 'It was formally opened to the public in August that year.', author: '@shova_bd88' },
    { image: '/varanasi.png', title: 'The faithful prayers!', description: 'A major pilgrimage center for Hindus, the holy city.', author: '@adem/smith' },
    { image: '/colorful-waters.png', title: 'Colourful waters!', description: 'Forest-driven water and energy cycles are poorly.', author: '@jhon7leew' },
  ];

  return (
    <section id="blog-news" className="py-12 mx-6">
      <div className="container mx-auto">
        <h2 className={`${gelasio.className} text-5xl mb-6 text-center`}>From Blog & News</h2>
        <p className={`${roboto.className} text-gray-500 mb-8 text-center`}>Welcome to Community Conversations, a new interview series featuring intrepid travellers, creatives and activists in our community.</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={192}
                className="w-full sm:w-1/2 object-cover"
              />
              <div className="p-4 w-full sm:w-1/2">
                <h3 className={`${gelasio.className} text-xl mb-2 text-center sm:text-left line-clamp-2`}>{post.title}</h3>
                <p className="text-gray-600 mb-2 line-clamp-2">{post.description}</p>
                <p className="text-sm line-clamp-2">{post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}