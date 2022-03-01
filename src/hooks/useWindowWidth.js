import { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

export default function useWindowWidth() {
  const windowInnerWidth = isBrowser ? window.innerWidth : 1500;

  const [screenWidth, setScreenWidth] = useState(windowInnerWidth);

  useEffect(() => {
    if (!isBrowser) return;
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return screenWidth;
}
