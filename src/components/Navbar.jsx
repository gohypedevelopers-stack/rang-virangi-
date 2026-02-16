import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="rv-navbar" role="banner">
      <div className="rv-navbar__container text-align-left">
        <a className="rv-brand" href="/" aria-label="RangVirangi home">
          RangVirangi
        </a>

        <nav className="rv-nav" aria-label="Primary">
          <a className="rv-nav__link is-active" href="/">
            Home
          </a>
          <a className="rv-nav__link" href="/shop">
            Shop
          </a>
          <a className="rv-nav__link" href="/about">
            About
          </a>
          <a className="rv-nav__link" href="/contact">
            Contact
          </a>
        </nav>

        <div className="rv-actions" aria-label="Quick actions">
          <button className="rv-icon-btn" type="button" aria-label="Search">
            <Search size={20} strokeWidth={1.75} />
          </button>
          <button className="rv-icon-btn" type="button" aria-label="Account">
            <User size={20} strokeWidth={1.75} />
          </button>
          <button className="rv-icon-btn" type="button" aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
}
