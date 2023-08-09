import { navLink } from '@/data/navLink';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="flex gap-4 pl-10 bg-teal-800 text-white">
      {navLink.map((link) => (
        <ul key={link.name} className="flex items-center h-16 ">
          {
            <Link href={link.path} className=" text-xl font-bold">
              <li className=" hover:text-yellow-400 hover:bg-stone-950 rounded-md transition-all duration-500 py-2 px-4">
                {link.name}
              </li>
            </Link>
          }
        </ul>
      ))}
    </div>
  );
}
