import type { NextPage } from 'next';
import { About } from '../components/About';
import { ImgButton } from '../components/ImgButton';
import { FaMedium, FaTwitter } from 'react-icons/fa';
import { DISCORD, GITHUB, MEDIUM, SUBSTACK, TWITTER } from '../config';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { SiSubstack } from 'react-icons/si';

import btn_twitter from '../public/btn_twitter.png'
import btn_medium from '../public/btn_medium.png'

const Index: NextPage = () => {
  return (
    <div className='flex-col flex items-center justify-between h-full w-full py-8'>
      <div className='flex-col items-center h-full w-72 space-y-10 justify-center'>
        {TWITTER !== undefined ? (
          <ImgButton
            text='Twitter'
            icon={<FaTwitter />}
            src={btn_twitter}
            href={TWITTER}
          />
        ) : (
          <></>
        )}

        {MEDIUM !== undefined ? (
          <ImgButton
            text='Medium'
            icon={<FaMedium />}
            src={btn_medium}
            href={MEDIUM}
          />
        ) : (
          <></>
        )}

        {SUBSTACK !== undefined ? (
          <ImgButton
            text='Substack'
            icon={<SiSubstack />}
            src={null}
            href={SUBSTACK}
          />
        ) : (
          <></>
        )}

        {GITHUB !== undefined ? (
          <ImgButton
            text='Github'
            icon={<BsGithub />}
            src={null}
            href={GITHUB}
          />
        ) : (
          <></>
        )}

        {DISCORD !== undefined ? (
          <ImgButton
            text='Discord'
            icon={<BsDiscord />}
            src={null}
            href={DISCORD}
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
