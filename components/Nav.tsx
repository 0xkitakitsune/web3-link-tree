import React from 'react';
import Image from 'next/image';
import useEagerConnect from '../hooks/useEagerConnect';
import Wallet from './Wallet';
import { DETAILS, LOGO } from '../config';
import { Tip } from './Tip';

export const Nav = () => {
  let triedToEagerConnect = useEagerConnect();

  return (
    <nav className='py-4 text-[1.1369rem] font-[380] border-white shadow-sm backdrop-blur'>
      <header
        className='
      w-full h-max-content
      justify-center'
      >
        <div
          className='flex top-0 justify-between
        items-center flex-between w-full px-4'
        >
          <div
            className='flex items-center
          space-x-5'
          >
            <Logo />
          </div>
          
          <div className='flex items-center space-x-2'>
            {DETAILS.wallet !== undefined ? <>
            <Tip />
            <Wallet triedToEagerConnect={triedToEagerConnect} /> </>
            : <></> }
          </div>
        </div>
      </header>
    </nav>
  );
};

const Logo = () => (
  <a href={DETAILS.headerlink} target='_blank' rel='noreferrer'>
    <div className='flex items-center space-x-3 cursor-pointer'>
      <Image
        alt='Logo'
        src={LOGO}
        height={48}
        width={48}
        className='rounded-xl'
      />
      {DETAILS.header?
      <span className='font-medium text-white/95 text-2xl hidden xs:inline bg-black/20 py-1.5 px-2 shadow-inner rounded-xl'>
        {DETAILS.header}
      </span>: <></> }
    </div>
  </a>
);
