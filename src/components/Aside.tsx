import type { ComponentProps, FC } from 'react';
import './Aside.css';

export const Aside: FC <ComponentProps<'div'>> = (props) => {
  return (
    <div {...props}> Sidebar </div>
  );
}

