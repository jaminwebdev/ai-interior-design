import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { shadow } from '@/lib/styles';
import Link from 'next/link';
import SiteLogo from './SiteLogo';

function Header() {
  return (
    <header
      className="flex justify-between items-center py-5 px-10"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link href="/" className="flex gap-3 items-center">
        <SiteLogo />
      </Link>
      <ThemeToggle />
    </header>
  );
}

export default Header;
