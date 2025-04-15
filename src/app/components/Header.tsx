import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-around p-4 bg-gray-800 text-white">
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="hover:underline">About</a>
      </Link>
      <Link href="/projects">
        <a className="hover:underline">Projects</a>
      </Link>
      <Link href="/contact">
        <a className="hover:underline">Contact</a>
      </Link>
    </header>
  );
};

export default Header;
