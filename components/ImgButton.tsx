import React from 'react';
import Image from 'next/image';

interface ImgButtonProps {
  text?: any
  icon?: any
  src?: any
  href?: any
}

export const ImgButton: React.FC<ImgButtonProps> = ({ text, icon, src, href }: any) => {
  return (
    <div className='rounded-2xl hover:ring-1 hover:ring-primary/90
    text-2xl font-medium group relative hover:shadow-primary/75 shadow-lg'>
      <div
        className='relative flex justify-center items-center
      max-w-[420px]'
      >
        <div className='relative w-full h-full'>
          <Img src={src} href={href} />
        </div>
        <a className='absolute flex w-full items-center justify-center space-x-8 z-0 cursor-pointer'
        href={href}
        target='_blank'
        rel='noreferrer'>
        <span className='group-hover:text-primary'>{icon}</span>
         <span className='group-hover:text-white'>{text}</span>
        </a>
      </div>
    </div>
  );
};

const Img = ({ src, href }: any) => (
  <a className='cursor-pointer'
  href={href}
  target='_blank'
  rel='noreferrer'>
  <Image
    alt='Button Image'
    src={src}
    layout='responsive'
    className='rounded-2xl opacity-70 backdrop-blur group-hover:opacity-90'
  />
  </a>
);
