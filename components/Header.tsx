import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { shadow } from '@/lib/styles';

function Header() {
  return (
    <header
      className="flex justify-between items-center py-5 px-5"
      style={{
        boxShadow: shadow,
      }}
    >
      <h1>Logo</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
