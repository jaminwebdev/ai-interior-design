import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import SiteLogo from './SiteLogo';
import { UserMenu } from './UserMenu';
import Container from './Container';

function Header() {
  return (
    <header className="py-5 px-10 border-b-1 border-primary">
      <Container extraClasses="flex justify-between items-center max-w-7xl">
        <Link href="/">
          <SiteLogo />
        </Link>
        <div className="flex gap-4">
          <ThemeToggle />
          <UserMenu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
