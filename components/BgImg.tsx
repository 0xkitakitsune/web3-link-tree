import { useEffect, useState } from 'react'
import Image from 'next/image'
import { BG } from '../config';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const BgImg = () => {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width && height) {
    return (
      <div className='fixed z-0 top-0'>
        <Image
          src={BG}
          width={width}
          height={height}
        />
      </div>
    );
  }

  return null;
}

export default BgImg;