import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className=" pl-10 bg-teal-800 text-white">
      <ul className="flex items-center h-16  gap-20">
        <li className=" hover:text-yellow-400">
          <Link href="/" className="text-xl font-bold">
            Home
          </Link>
        </li>
        <li className=" hover:text-yellow-400">
          <Link href="/cost" className="text-xl font-bold">
            Cost page
          </Link>
        </li>
        <li className=" hover:text-yellow-400">
          <Link href="/about_us" className="text-xl font-bold">
            About page
          </Link>
        </li>
        <li className=" hover:text-yellow-400">
          <Link href="/post/" className="text-xl font-bold">
            Post
          </Link>
        </li>
      </ul>
    </div>
  );
}
