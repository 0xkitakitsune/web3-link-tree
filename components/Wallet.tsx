import { useWeb3React } from '@web3-react/core';
import { UserRejectedRequestError } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { injected } from '../connectors';

type WalletProps = {
  triedToEagerConnect: boolean;
};

const Wallet = ({ triedToEagerConnect }: WalletProps) => {
  const { active,error,activate,chainId,account,setError } = useWeb3React();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
    }
  }, [active, error]);

  if (error) return null;
  if (!triedToEagerConnect) return null;

  if (typeof account !== 'string') { // Checks if there is a usable account - returns 'Connect Wallet' if not, and 0x0000.0000 if so
    return (
      <div>
        <button className='flex items-center 
          hover:px-2.5 hover:py-2 py-1.5 px-2 rounded-xl 
          text-white/80 shadow hover:shadow-md 
          shadow-primary/40 hover:shadow-primary/50
          ring-1 ring-primary/75
          transition-all ease-in-out duration-200 hover:text-white/90
          text-[1rem] hover:text-[1.023rem] hover:font-medium'
          disabled={connecting}
          onClick={() => {
            setConnecting(true);

            activate(injected, undefined, true).catch((error) => {
              // ignore the error if it's a user rejected request
              if (error instanceof UserRejectedRequestError) {
                setConnecting(false);
              } else {
                setError(error);
              }
            });
          }}
        >
          Connect Wallet
        </button>
      </div>
    );
  } else if (!injected.supportedChainIds!.includes(chainId!)) {
    return (
      <button className='flex items-center rounded-xl py-1.5 px-2 font-light
      ring-1 ring-primary/75 text-white/80 shadow-md hover:shadow-md
      hover:shadow-primary/40 shadow-primary/40 space-x-1
      transition-all ease-in-out duration-100 hover:text-white/90 text-[1rem]'
      onClick={changeToEthereumMainnet}
      >
      <FiAlertTriangle />
      <span>Unsupported Network</span>
    </button>
    )
  }
  return (
    <div className='cursor-pointer flex items-center rounded-xl py-1.5 px-2 font-light
      ring-1 ring-primary/75 text-white/80 shadow-md hover:shadow-md hover:shadow-primary/40 shadow-primary/40
      transition-all ease-in-out duration-100 hover:text-white/90 text-[1rem]'>
      {shortenHex(account)}
    </div>
  );
};

const shortenHex = (hex: string, length = 4) => {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export default Wallet;

const changeToEthereumMainnet = async () => {
  try {
    if (window.ethereum) {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }]
      }).then(() => {
        console.log('Switched to Ethereum Mainnet 👍')
      })
    }
  } catch (err: any) {
    console.error(err.message);
  }
}

declare let window: any;