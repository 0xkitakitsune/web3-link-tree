import type { NextPage } from 'next';
import { About } from '../components/About';
import { ImgButton } from '../components/ImgButton';
import { FaMedium, FaTwitter } from 'react-icons/fa';
import { DISCORD, GITHUB, MEDIUM, SUBSTACK, TWITTER } from '../config';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { SiSubstack } from 'react-icons/si';

const Index: NextPage = () => {
  return (
    <div className='flex-col flex items-center justify-between h-full w-full py-8'>
      <div className='flex-col items-center h-full w-72 space-y-10 justify-center'>
        {TWITTER.button !== undefined ? (
          <ImgButton
            text='Twitter'
            icon={<FaTwitter />}
            src={TWITTER.button}
            href={TWITTER.link}
          />
        ) : (
          <></>
        )}

        {MEDIUM.button !== undefined ? (
          <ImgButton
            text='Medium'
            icon={<FaMedium />}
            src={MEDIUM.button}
            href={MEDIUM.link}
          />
        ) : (
          <></>
        )}

        {SUBSTACK.button !== undefined ? (
          <ImgButton
            text='Substack'
            icon={<SiSubstack />}
            src={SUBSTACK.button}
            href={SUBSTACK.link}
          />
        ) : (
          <></>
        )}

        {GITHUB.button !== undefined ? (
          <ImgButton
            text='Github'
            icon={<BsGithub />}
            src={GITHUB.button}
            href={GITHUB.link}
          />
        ) : (
          <></>
        )}

        {DISCORD.button !== undefined ? (
          <ImgButton
            text='Discord'
            icon={<BsDiscord />}
            src={DISCORD.button}
            href={DISCORD.link}
          />
        ) : (
          <></>
        )}

        <div className='items-center justify-center flex flex-col space-y-4 pb-8'>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Index;
