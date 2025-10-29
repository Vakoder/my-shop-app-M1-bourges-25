import type { FC } from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Connexion</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control ${errors.email ? 'error' : ''}`}
                            {...register('email', {
                                required: 'L\'email est requis'
                            })}
                            placeholder="Votre adresse email"
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            className={`form-control ${errors.password ? 'error' : ''}`}
                            {...register('password', {
                                required: 'Le mot de passe est requis'
                            })}
                            placeholder="Votre mot de passe"
                        />
                        {errors.password && (
                            <span className="error-message">{errors.password.message}</span>
                        )}
                    </div>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="btn btn-primary login-btn"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Connexion...' : 'Se connecter'}
                    </button>
                </form>
            </div>
        </div>
    );
}