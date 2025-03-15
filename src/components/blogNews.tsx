'use client';

import Image from 'next/image';
import { Gelasio } from 'next/font/google';
import { Roboto } from 'next/font/google';

const gelasio = Gelasio({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
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
        <div className="flex flex-col md:flex-row gap-3">
          {/* Large Card (Left) */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              width={570}
              height={420}
              className="p-4 object-contain"
            />
            <div className='p-4'>
              <h3 className={`${gelasio.className} text-xl mb-2 text-center md:text-left line-clamp-2`}>{posts[0].title}</h3>
              <p className={`${roboto.className} text-gray-500 mb-2`}>{posts[0].description}</p>
              <p className={`${roboto.className} text-sm line-clamp-1`}>{posts[0].author}</p>
            </div>
          </div>
          {/* Smaller Cards (Right Column) */}
          <div className="p-4 w-full md:w-1/2 flex flex-col gap-6">
            {posts.slice(1, 4).map((post, index) => (
              <div key={index} className="flex max-[480px]:flex-col md:flex-col lg:flex-row overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={260}
                  height={200}
                  className="h-[150px] md:h-[200px] w-[200px] md:w-[260px] object-contain"
                />
                <div className="p-4 max-[480px]:px-0 md:px-0 lg:px-4">
                  <h3 className={`${gelasio.className} text-xl mb-2 md:text-left line-clamp-2`}>{post.title}</h3>
                  <p className={`${roboto.className} text-gray-600 mb-2 line-clamp-2`}>{post.description}</p>
                  <p className={`${roboto.className} text-sm line-clamp-1`}>{post.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}