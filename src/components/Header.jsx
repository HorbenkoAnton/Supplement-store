import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="store-header">
      <h1><a href="/" className="brand-logo">Supplement Store</a></h1>
      <nav>
        <a href="/information">Information</a>
        <a href="/products">Products</a>
        <a href="/contacts">Contacts</a>
      </nav>
    </header>
  );
}

export default Header;
