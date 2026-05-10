import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FloatingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic: if scrolled more than 100px, add the 'floating' class
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
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section className={`nav-wrapper one ${isScrolled ? 'floating' : ''}`}>
      <nav className="container flex">
        <div className="flex center">
          {/* Internal Link to Home */}
          <Link className="small-logo-wrapper" to="/" onClick={closeMenu}>
            <img src="./src/img/cactus-logo.JPG" alt="Cactus Theatre Co Logo" />
          </Link>
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

          {/* Internal Navigation Links using 'to' instead of 'href' */}
          <li><Link to="/about" className="pointer hover" onClick={closeMenu}>About</Link></li>
          <li><Link to="/memories" className="hover" onClick={closeMenu}>Memories</Link></li>
          <li><Link to="/contact" className="pointer hover" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/past-shows" className="hover" onClick={closeMenu}>Past Shows</Link></li>
          
          <li className="w-100">
            <div className="flex sp-even">
              {/* External Links: KEEP standard <a> tags */}
              <a href="https://facebook.com/..." target="_blank" rel="noreferrer" className="pointer hover">
                <i className="fa-solid fa-square-rss"></i> {/* Corrected icon example */}
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