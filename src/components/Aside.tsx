import type { FC } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import './Aside.css';

export const Aside: FC = () => {
  return (
    <Box className="Sidebar">
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Man" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Woman" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Kid" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Dog" />
        </ListItem>
      </List>
    </Box>
  );
}

