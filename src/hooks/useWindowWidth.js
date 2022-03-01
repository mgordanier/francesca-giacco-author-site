import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const windowInnerWidth =
    typeof window !== 'undefined' ? window.innerWidth : 1500;

  const [screenWidth, setScreenWidth] = useState(windowInnerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(windowInnerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return screenWidth;
}
