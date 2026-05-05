import React, { useState, useEffect } from 'react';

const FloatingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll logic for the floating effect
  useEffect(() => {
    const handleScroll = () => {
      // Logic: if scrolled more than 50px, add a 'floating' class
      // In your original JS, you used heroBanner.offsetHeight
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className={`nav-wrapper one ${isScrolled ? 'floating' : ''}`}>
      <nav className="container flex">
        <div className="flex center">
          <a className="small-logo-wrapper" href="/">
            <img src="./src/img/cactus-logo.JPG" alt="Cactus Theatre Co Logo" />
          </a>
          <h3>Cactus Theatre Co.</h3>
        </div>

        {/* Burger Menu Trigger */}
        <div className="burger-menu pointer hover" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Navigation Links */}
        <ul className={`link-wrapper ${isMenuOpen ? 'visible' : ''}`}>
          <li className="flex-end">
            <button className="hover menu-close" onClick={toggleMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
          <li><a href="/about.html" className="pointer hover">About</a></li>
          <li><a href="/memories.html" className="hover">Memories</a></li>
          <li><a href="/contact.html" className="pointer hover">Contact</a></li>
          <li><a href="/previous-shows/cactus.html" className="hover">Past Shows</a></li>
          
          <li className="w-100">
            <div className="flex sp-even">
              <a href="https://facebook.com/..." target="_blank" rel="noreferrer" className="pointer hover">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://instagram.com/..." target="_blank" rel="noreferrer" className="pointer hover">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://youtube.com/..." target="_blank" rel="noreferrer" className="pointer hover">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default FloatingHeader;