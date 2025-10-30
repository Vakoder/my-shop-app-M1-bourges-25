import type { FC } from 'react';
import { Box } from '@mui/material';
import './Main.css';
import { Aside } from './Aside';
import { Content } from './Content';


export const Main: FC = () => {
  return (
    <Box 
      component="main" 
      className="Main" 
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 2 }}
    >
      <Box sx={{ flex: '0 0 200px' }}>
        <Aside />
      </Box>
      <Box sx={{ flex: '1 1 600px' }}>
        <Content />
      </Box>
    </Box>
  );
}

