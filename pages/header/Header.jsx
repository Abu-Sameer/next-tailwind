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
    <div className="flex gap-6 pl-10 bg-green-900 text-white">
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
    </div>
  );
}
