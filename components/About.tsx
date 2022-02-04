import { Disclosure } from '@headlessui/react';
import React from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { ABOUT, ABOUT2, ABOUT3, ABOUT4, ABOUT5 } from '../config';

export const About: React.FC = ({}) => {
  return (
    <>
    {ABOUT.text !== undefined ?
    <div className='bg-gray-900/50 backdrop-blur w-full mx-3 max-w-md p-2 ring-1 ring-primary/80 rounded-xl shadow text-white/80 space-y-2.5'>
      {ABOUT.text ? 
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className='flex justify-between w-full px-4 py-2 text-sm font-medium
              text-left hover:text-white/90 bg-primary/90 rounded-lg hover:bg-primary/95
              focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <span>{ABOUT.title}</span>
                <FiChevronUp
                  className={`${
                  open ? 'transform rotate-180' : ''
                  } w-5 h-5`}/>
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 py-2 text-sm text-white/80'>
              {ABOUT.text}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> : <></>}

      {ABOUT2.text ? 
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className='flex justify-between w-full px-4 py-2 text-sm font-medium
              text-left hover:text-white/90 bg-primary/90 rounded-lg hover:bg-primary/95
              focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <span>{ABOUT2.title}</span>
                <FiChevronUp
                  className={`${
                  open ? 'transform rotate-180' : ''
                  } w-5 h-5`}/>
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 py-2 text-sm text-white/80'>
              {ABOUT2.text}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> : <></>}

      {ABOUT3.text ? 
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className='flex justify-between w-full px-4 py-2 text-sm font-medium
              text-left hover:text-white/90 bg-primary/90 rounded-lg hover:bg-primary/95
              focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <span>{ABOUT3.title}</span>
                <FiChevronUp
                  className={`${
                  open ? 'transform rotate-180' : ''
                  } w-5 h-5`}/>
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 py-2 text-sm text-white/80'>
              {ABOUT3.text}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> : <></>}

      {ABOUT4.text ? 
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className='flex justify-between w-full px-4 py-2 text-sm font-medium
              text-left hover:text-white/90 bg-primary/90 rounded-lg hover:bg-primary/95
              focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <span>{ABOUT4.title}</span>
                <FiChevronUp
                  className={`${
                  open ? 'transform rotate-180' : ''
                  } w-5 h-5`}/>
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 py-2 text-sm text-white/80'>
              {ABOUT4.text}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> : <></>}

      {ABOUT5.text ? 
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className='flex justify-between w-full px-4 py-2 text-sm font-medium
              text-left hover:text-white/90 bg-primary/90 rounded-lg hover:bg-primary/95
              focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <span>{ABOUT5.title}</span>
                <FiChevronUp
                  className={`${
                  open ? 'transform rotate-180' : ''
                  } w-5 h-5`}/>
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 py-2 text-sm text-white/80'>
              {ABOUT5.text}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> : <></>}

    </div> : <></> }
    </>
  );
};
