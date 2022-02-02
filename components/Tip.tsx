import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import metamask from '../public/metamask.png';
import { NAME, WALLET } from '../config';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

export const Tip: React.FC = ({}) => {
  const web3 = useWeb3React();
    web3.active
      ? console.log(
          'You are connected to Web3 Link Tree by @0xNaut via',
          web3.account
        )
      : console.log('Web3 not connected');
  
  const payTip = async ({ setError, setTxs, ether, addr }: any) => {
    try {
      ethers.utils.getAddress(addr);
      const tx = await web3.library.getSigner(web3.account).sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log('tx', tx);
      setTxs([tx]);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const [error, setError]: any = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await payTip({
      setError,
      setTxs,
      ether: data.get('ether'),
      addr: WALLET,
    });
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const DonateButton = () => {
    return (
      <button
        className='cursor-pointer flex items-center rounded-xl py-1.5 px-2 hover:py-2 hover:px-2.5
      bg-gray-100/10 backdrop-blur text-white/80 shadow-md
      transition-all ease-in-out duration-00 hover:text-white/90
      text-[1.05rem] hover:text-[1.088rem] hover:font-medium space-x-2'
        onClick={openModal}
      >
        <Image alt='Metamask Icon' src={metamask} layout='fixed' width='24' height='24' />
        <span>Tip</span>
      </button>
    );
  };

  return (
    <>
      <div className='inset-0 flex items-center justify-center'>
        <DonateButton />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div
                className='inline-block w-full max-w-md p-6 my-8 overflow-hidden
              text-left align-middle transition-all transform bg-gray-900/60 shadow-xl
              rounded-2xl backdrop-blur ring-1 ring-primary/90'
              >
                <Dialog.Title
                  as='span'
                  className='text-3xl font-bold leading-6 text-white/90'
                >
                  Donate to {NAME}
                </Dialog.Title>
                <div className='mt-2 flex-col space-y-2'>
                  <p className='text-sm text-gray-200/90 font-semibold'>
                    Please note, you are donating in the Native token of whichever Blockchain you are currently on.
                  </p>
                  <p className='text-xs text-gray-200/90'>
                    You can donate any Native token, by switching to any Blockchain. A blockchain indicator is planned.
                  </p>
                </div>

                <form className='' onSubmit={handleSubmit}>
                  <div className='w-full mx-auto'>
                    <main className='mt-3 p-4 text-[1.1rem]'>

                        <div className='text-white/80 space-y-1.5 flex-col'>
                          <span>To</span>
                          <input
                            type='text'
                            name='addr'
                            className='placeholder-primary font-semibold hover:cursor-not-allowed rounded-lg shadow-inner bg-gray-500/20 p-3 backdrop-blur w-full focus:ring focus:outline-none'
                            placeholder={`${NAME}`}
                            disabled
                          />
                        </div>
                        <div className='text-white/80 space-y-1.5 flex-col mt-3'>
                          <span>Amount</span>
                          <input
                            name='ether'
                            type='text'
                            className='text-white/80 rounded-lg shadow-inner bg-gray-500/20 p-3 backdrop-blur w-full focus:ring focus:outline-none'
                            placeholder='Enter Donation'
                          />
                        </div>

                    </main>
                    <footer className='p-4'>
                      <button
                        type='submit'
                        className='focus:ring w-full
                        inline-flex justify-center px-4 py-2 text-sm font-medium text-primary/90 bg-white/10 backdrop-blur border border-transparent rounded-md hover:bg-white/20 hover:text-primary focus:outline-none'
                      >
                        Donate
                      </button>

                      {error !== undefined ?
                      <div className='mt-6 text-white/80'>
                        <div className='flex-1 shadow-inner rounded-xl p-2 text-xs bg-black/30 backdrop-blur'>
                          <label>Error: {error}</label>
                        </div>
                      </div>
                      : <></> }

                    </footer>
                  </div>
                </form>

              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
