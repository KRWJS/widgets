import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui four item menu">
      <Link href="/" className="item">Accordion</Link>
      <Link href="/search-wikipedia" className="item">Search Wikipedia</Link>
      <Link href="/dropdown" className="item">Dropdown</Link>
      <Link href="/translate" className="item">Translate</Link>
    </div>
  );
}
 
export default Header;
