import type { FC } from 'react';
import './Main.css';
import { Aside } from './Aside';
import { Content } from './Content';


export const Main: FC = () => {
  return (
    <main className='Main row'>
        <Aside className='Sidebar col-4'/>
        <Content className='Content col-8'/>
    </main>
  );
}

