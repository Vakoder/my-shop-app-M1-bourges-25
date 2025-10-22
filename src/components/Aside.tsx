import type { ComponentProps, FC } from 'react';
import './Aside.css';

export const Aside: FC <ComponentProps<'div'>> = (props) => {

  return (
    <div {...props}>
      <ul className='Aside-list list-unstyled d-flex flex-column gap-3'>
        <li className="Aside-item" >Man </li>
        <li className="Aside-item" > Woman </li>
        <li className="Aside-item" > Kid </li><li className="Aside-item" > Dog </li>
      </ul>
    </div>
  );
}

