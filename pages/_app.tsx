import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Nav } from '../components/Nav';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import BgImg from '../components/BgImg';
import { DETAILS, TITLE } from '../config';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className='flex flex-col w-full h-full fixed z-10 text-white/80'>
      <Head>
        <title>{DETAILS.name} - Web3 Link Tree</title>
        <meta name='keywords' content={TITLE} />
        <meta name='description' content={TITLE} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col h-screen
      overflow-y-scroll bg-transparent'>
        <div className='top-0 sticky z-50'><Nav /></div>
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
    <BgImg />
    </Web3ReactProvider>
  )}

export default MyApp
