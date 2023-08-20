import { navLink } from '@/data/navLink';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Header() {
  const [go, setgo] = useState(false);

  setTimeout(() => {
    setgo(!go);
  }, 3000);

  const router = useRouter();
  return (
    <div className="flex items-center justify-between gap-6 pl-10 bg-green-900 text-white">
      <Image
        src="/white-a.png"
        alt="logo"
        height={50}
        width={50}
        className={`${go ? 'logo' : 'im'} animate-bounce mr-5 py-2`}
      />
      {navLink.map((link) => (
        <ul key={link.name} className="flex items-center h-20 ">
          {
            <Link href={link.path} className="text-xl font-bold">
              <li
                className={`${
                  router.pathname === link.path
                    ? 'bg-white text-green-900 hover:scale-125 uppercase transition duration-200 rounded-md'
                    : 'hover:bg-green-800 hover:scale-125 hover:uppercase transition duration-200 rounded-md'
                }  py-2 px-4`}
              >
                {link.name}
              </li>
            </Link>
          }
        </ul>
      ))}
      <div className="flex items-center">
        <div>
          <input
            type="text"
            className="rounded-md py-1 px-2 h-10 text-black outline-none"
            placeholder="Enter your search"
          />
          <input
            type="button"
            value="Search"
            className="px-5 py-0 ml-1 rounded-md h-10 bg-white text-green-900 text-lg font-bold"
          />
        </div>
        <Image
          className="ml-10 mr-5"
          src={'/user.png'}
          height={50}
          width={50}
          alt="user image"
        />
      </div>
    </div>
  );
}
