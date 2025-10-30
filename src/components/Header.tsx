import { useContext, type FC } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Avatar
} from '@mui/material';
import { Home, ShoppingCart, ContactMail } from '@mui/icons-material';
import './Header.css';
import { UserContext } from '../user';
import { Link, useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const {user, logout} = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0, mr: 3 }}>
          <Avatar 
            src='./src/assets/logo.png' 
            alt='Logo' 
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
          <Button 
            color="inherit" 
            startIcon={<Home />}
            component={Link} 
            to="/"
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            startIcon={<ShoppingCart />}
          >
            Products
          </Button>
          <Button 
            color="inherit" 
            startIcon={<ContactMail />}
          >
            Contact
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1">
            {user ? `Welcome, ${user.name}` : 'Guest'}
          </Typography>
          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button 
              variant="outlined" 
              color="inherit" 
              component={Link} 
              to="/login"
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

