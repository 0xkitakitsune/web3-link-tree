import React from 'react';
import { FaTwitter, FaMedium } from 'react-icons/fa';
import { BsDiscord, BsGithub, BsHeartFill } from 'react-icons/bs';
import { SiSubstack } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { DISCORD, GITHUB, MEDIUM, SUBSTACK, TWITTER } from '../config';

export const Footer: React.FC = ({}) => {
  return (
    <footer
      className='text-white/80 bottom-0 items-center justify-center py-2
      flex flex-col space-y-4 backdrop-blur w-screen'>
      <MediaIcons />

      <div className='flex items-center flex-col text-xs space-y-1'>
        <span className='leading-none text-white/75 flex items-center space-x-1.5'>
          <span className='flex'>Made with</span>{' '}
          <span>
            <a
              className='text-primary/75 hover:text-primary'
              href='https://twitter.com/0xNaut'
              target='_blank'
              rel='noreferrer'>
              <BsHeartFill />
            </a>
          </span>
          <span>
            by{' '}
            <a
              className='text-primary/75 font-semibold hover:text-primary'
              href='https://twitter.com/0xNaut'
              target='_blank'
              rel='noreferrer'>
              {' '}
              Naut
            </a>
            .
          </span>
        </span>
        <a
          href='https://github.com/0xNaut/Web3-Link-Tree'
          target='_blank'
          rel='noreferrer'
          className='group cursor-pointer'>
          <span className='font-semibold group-hover:text-primary'>Create</span>{' '}
          your own{' '}
          <span className='font-semibold group-hover:text-primary'>
            Web3 Link Tree
          </span>{' '}
          <div className='items-center ml-1.5 inline-block translate-y-0.5 group-hover:text-primary group-hover:translate-x-4 transition-all duration-200 ease-in-out'>
            <FiArrowRight />
          </div>
        </a>
      </div>
    </footer>
  );
};

const MediaIcons = () => {
  return (
    <div className='h-8 flex w-full items-center justify-center space-x-8 transition-all duration-200 text-3xl text-primary/70'>
      {TWITTER !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={TWITTER}
          target='_blank'
          rel='noreferrer'>
          <FaTwitter />
        </a>
      ) : (
        <></>
      )}

      {MEDIUM !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={MEDIUM}
          target='_blank'
          rel='noreferrer'>
          <FaMedium />
        </a>
      ) : (
        <></>
      )}

      {SUBSTACK !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={SUBSTACK}
          target='_blank'
          rel='noreferrer'>
          <SiSubstack />
        </a>
      ) : (
        <></>
      )}

      {GITHUB !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={GITHUB}
          target='_blank'
          rel='noreferrer'>
          <BsGithub />
        </a>
      ) : (
        <></>
      )}

      {DISCORD !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={DISCORD}
          target='_blank'
          rel='noreferrer'>
          <BsDiscord />
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};
