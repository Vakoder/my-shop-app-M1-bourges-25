import type { FC } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Link
} from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import "./Footer.css"

export const Footer: FC = () => {
    return (
        <Box 
            component="footer" 
            sx={{ 
                bgcolor: 'primary.main', 
                color: 'white', 
                py: 3, 
                mt: 'auto' 
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                        <Typography variant="body2">
                            © 2025 My Shop. All rights reserved.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '0 0 auto' }}>
                        <Typography variant="body2">
                            Follow us on
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '1 1 auto', display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Link 
                            href="#" 
                            color="inherit" 
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                        >
                            <Facebook fontSize="small" />
                            Facebook
                        </Link>
                        <Link 
                            href="#" 
                            color="inherit" 
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                        >
                            <Twitter fontSize="small" />
                            X/Twitter
                        </Link>
                        <Link 
                            href="#" 
                            color="inherit" 
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                        >
                            <Instagram fontSize="small" />
                            Instagram
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
