import Link from 'next/link';
import React from 'react';
import Header from '../header/Header';

export default function Layout({ children, home }) {
  return (
    <div>
      <header>
        {home ? (
          <Header />
        ) : (
          <h1 className="text-1xl font-bold">Other Header</h1>
        )}
      </header>
      {children}
      <footer className="bg-green-900 text-white h-16 flex items-center text-2xl justify-center">
        Footer
      </footer>
    </div>
  );
}
