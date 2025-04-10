'use client';

import React, { useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import SiteLogo from './SiteLogo';
import { UserMenu } from './UserMenu';
import Container from './Container';
import { Star } from 'lucide-react';
import { toasts } from '@/lib/toasts';

type Props = {
  credits: number;
};

function Header({ credits }: Props) {
  useEffect(() => {
    if (!credits) {
      toasts.retrieveCreditsError();
    }
  }, [credits]);

  return (
    <header className="py-5 px-10 border-b-1 border-primary">
      <Container extraClasses="flex justify-between items-center max-w-7xl">
        <Link href="/">
          <SiteLogo />
        </Link>
        <div className="flex gap-4">
          <ThemeToggle />
          <div className="border-1 border-muted text-foreground p-2 rounded-full flex items-center gap-0.5">
            {credits}
            <Star size="16" className="fill-amber-300 stroke-amber-500" />
          </div>
          <UserMenu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
