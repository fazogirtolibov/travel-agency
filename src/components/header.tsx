// 'use client';

// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { Ribeye } from "next/font/google";
// import { Roboto } from "next/font/google";

// const ribeye = Ribeye({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400'
// });

// const roboto = Roboto({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400'
// });

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="relative bg-[var(--trevland-blue)] text-white p-4">
//       <Image
//         src="/hero-background.png"
//         alt="Header background"
//         fill
//         className="object-cover opacity-50"
//         priority
//       />
//       <div className="container mx-auto flex justify-between items-center relative z-10">
//         <h1 className={`text-2xl font-bold ${ribeye.className}`}>Trevland</h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li className='mr-10'><a href="/" className={`hover:underline ${roboto.className} text-sm`}>Home</a></li>
//             <li className='mr-10'><a href="/location" className={`hover:underline ${roboto.className}`}>Location</a></li>
//             <li className='mr-10'><a href="/blog" className={`hover:underline ${roboto.className}`}>Blog</a></li>
//             <li className='mr-10'><a href="/about" className={`hover:underline ${roboto.className}`}>About</a></li>
//             <li className='mr-10'><a href="/contact" className={`hover:underline ${roboto.className}`}>Contact</a></li>
//           </ul>
//         </nav>
//         <button
//           onClick={() => router.push('#')}
//           className="bg-[var(--trevland-red)] hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Booking now
//         </button>
//       </div>
//     </header>
//   );
// }