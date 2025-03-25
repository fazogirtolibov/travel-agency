'use client';

import Image from 'next/image';
import { Ribeye } from "next/font/google";
import { Roboto } from "next/font/google";

const ribeye = Ribeye({ subsets: ['latin'], display: 'swap', weight: '400' });
const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: '400' });

export default function Footer() {

  return (
    <footer id="footer" className="py-8 md:py-20 bg-[var(--trevland-gray)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold mb-4 ${ribeye.className}`}>Trevland</h3>
            <p className={`mb-2 ${roboto.className}`}>Contact us</p>
            <p className={`${roboto.className}`}>
              <a href="mailto:shovasatkira88.com" target="_blank" rel="noopener noreferrer">
                ✉️ shovasatkira88.com
              </a>
            </p>
            <ul className={`mt-2 flex flex-row justify-center md:justify-start space-x-2 footer__social ${roboto.className}`}>
              <li className="footer__social-item">
                <a href="#" target="_blank" className="footer__social-link">
                  <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" target="_blank" className="footer__social-link">
                  <Image src="/insta.svg" alt="Instagram" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" target="_blank" className="footer__social-link">
                  <Image src="/twiter.svg" alt="Twitter" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" target="_blank" className="footer__social-link">
                  <Image src="/google.svg" alt="Google" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold mb-4 ${roboto.className}`}>Services</h3>
            <p className={`${roboto.className}`}>About</p>
            <p className={`${roboto.className}`}>Our story</p>
            <p className={`${roboto.className}`}>Benefits</p>
            <p className={`${roboto.className}`}>Branding</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold mb-4 ${roboto.className}`}>Legal</h3>
            <p className={`${roboto.className}`}>Terms & Conditions</p>
            <p className={`${roboto.className}`}>Privacy Policy</p>
            <p className={`${roboto.className}`}>Terms of use</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold mb-4 ${roboto.className}`}>SUBSCRIBE NOW</h3>
            <form className="flex flex-row items-center justify-center md:justify-start">
              <input
                type="email"
                placeholder="Email"
                className={`p-2 rounded-l md:w-full w-full sm:w-3/4 ${roboto.className}`}
                required
              />
              <button
                type="submit"
                className="bg-[var(--trevland-red)] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-r sm:rounded-l-none mt-2 sm:mt-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}