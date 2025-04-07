import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { shadow } from '@/lib/styles';
import Link from 'next/link';
import SiteLogo from './SiteLogo';
import { UserMenu } from './UserMenu';

function Header() {
  return (
    <header
      className="flex justify-between items-center py-5 px-10"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link href="/">
        <SiteLogo />
      </Link>
      <div className="flex gap-4">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
