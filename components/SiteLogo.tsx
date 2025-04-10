import { DoorOpen } from 'lucide-react';
import React from 'react';

function SiteLogo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-full bg-foreground p-2">
        <DoorOpen size="26" className="stroke-background" />
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-black tracking-[.05rem] leading-[1.1rem]">
          AI
        </p>
        <p className="leading-[1.1rem]">Interiors</p>
      </div>
    </div>
  );
}

export default SiteLogo;
