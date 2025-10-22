import type { FC } from 'react';
import './Header.css';

export const Header: FC = () => {
  return (
    <header className='Header row'>
      <div className='Logo col-2'><img src='./src/assets/logo.png' alt='Logo' /></div>
      <div className='Navigation col-10 '>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}

