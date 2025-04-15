import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-around p-4 bg-gray-800 text-white">
      <Link className="hover:underline" href="/">
        Home
      </Link>
      <Link className="hover:underline" href="/about">
        About
      </Link>
      <Link className="hover:underline" href="/projects">
       Projects
      </Link>
      <Link className="hover:underline" href="/contact">
       Contact
      </Link>
    </header>
  );
};

export default Header;
