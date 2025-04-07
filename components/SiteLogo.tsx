import React from 'react';

function SiteLogo() {
  return (
    <div className="flex gap-2 items-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 138 138"
        fill="none"
        className="max-w-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.25"
          y="0.25"
          width="137.5"
          height="137.5"
          rx="25"
          className="fill-secondary"
        />
        <path
          d="M104.938 101.812V36.1875H87.75V21.54L36.1875 30.4301V101.812H22.125V108.062H39.0977L87.75 114.773V42.4375H98.6875V108.062H115.875V101.812H104.938ZM81.5 107.602L42.4375 102.214V35.6949L81.5 28.9609V107.602Z"
          fill="white"
        />
        <path d="M69 64.3125H75.25V76.8125H69V64.3125Z" fill="white" />
      </svg>

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
