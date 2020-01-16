import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div>
        <header>
            <h1>MatchSquare</h1>
            <input type="text" placeholder="Search products and sellers"></input>
        </header>
    </div>
  )
}

export default Header;