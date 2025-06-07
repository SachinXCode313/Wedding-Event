import React, { useState, useEffect } from 'react';
import TopInfoBar from './TopInfoBar';
import MainNav from './MainNav';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <TopInfoBar isScrolled={isScrolled} />
      <hr className=" border-t-[1px] border-white" />
      <MainNav isScrolled={isScrolled} />
    </header>
  );
};

export default Navbar;