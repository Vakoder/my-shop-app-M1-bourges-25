import type { ComponentProps, FC } from 'react';
import './Content.css';

export const Content: FC <ComponentProps<'div'>> = (props) => {
  return (
    <div {...props}> Content </div>
  );
}


