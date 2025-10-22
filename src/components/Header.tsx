import type { FC } from 'react';
import './Header.css';

export const Header: FC = () => {
  return (
    <header className='Header row'>
      <div className='Logo col-2'> Logo </div>
      <div className='Navigation col-10'> Home Products Contact </div>
    </header>
  );
}

