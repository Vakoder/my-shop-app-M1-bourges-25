import type { FC } from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
    Container, 
    Paper, 
    Typography, 
    TextField, 
    Button, 
    Alert, 
    Box 
} from '@mui/material';
import { UserContext } from '../user';

interface LoginFormData {
    email: string;
    password: string;
}

export const Login: FC = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        mode: 'onChange'
    });

    const onSubmit = async (data: LoginFormData) => {
        setError('');
        setIsLoading(true);

        try {
            if (data.password === 'azerty') {
                login({
                    id: "1",
                    name: data.email.split('@')[0], 
                    avatar: "https://i.pravatar.cc/150?img=3"
                });
                
                navigate('/');
            } else {
                setError('Mot de passe incorrect. Veuillez réessayer.');
            }
            
        } catch (error) {
            setError('Erreur de connexion. Veuillez réessayer.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Connexion
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...register('email', {
                            required: 'L\'email est requis'
                        })}
                        placeholder="Votre adresse email"
                    />

                    <TextField
                        fullWidth
                        label="Mot de passe"
                        type="password"
                        margin="normal"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        {...register('password', {
                            required: 'Le mot de passe est requis'
                        })}
                        placeholder="Votre mot de passe"
                    />

                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <Button 
                        type="submit" 
                        fullWidth
                        variant="contained"
                        size="large"
                        disabled={isLoading}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isLoading ? 'Connexion...' : 'Se connecter'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}