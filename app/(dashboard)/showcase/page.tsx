import { ButtonsDemo } from '@/components/showcase/ButtonsExample';
import { CookieSettings } from '@/components/showcase/Cookies';
import { CreateAccount } from '@/components/showcase/CreateAccount';
import { Notifications } from '@/components/showcase/Notifications';
import React from 'react';

function Showcase() {
  return (
    <div className="p-8">
      <div className="items-start gap-6 md:grid lg:grid-cols-3">
        <Notifications />
        <div className="flex flex-col - gap-4">
          <ButtonsDemo />
          <CookieSettings />
        </div>
        <CreateAccount />
      </div>
    </div>
  );
}

export default Showcase;
