import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {
    Avatar,
    Box,
    Button,
    Container,
    Typography,
    Grid,
    Link,
    CircularProgress, CssBaseline,
} from '@mui/material';
import Input from '../../../../../shared/presentation/components/forms/Input'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../../../../context/AuthContext.tsx';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState} from 'react';
import {loginSchema} from '../../../application/schemas/login';
import {LoginFormValues} from "../../../application/types/login.tsx";


const defaultTheme = createTheme();

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema)
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data: LoginFormValues) => {
        try {
            setLoading(true);
            setError('');
            await login(data.email, data.password);
            navigate('/dashboard');
        } catch (err) {
            setError('Credenciales incorrectas');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Container maxWidth="sm" sx={{
                height: '100%', // altura completa de la ventana
                width: '100%',
                display: 'flex',
                justifyContent: 'center', // centrado horizontal
                alignItems: 'center'      // centrado vertical
            }}>
                <Box>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.secondary'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>

                    {error && (
                        <Typography color="error" sx={{mt: 2}}>
                            {error}
                        </Typography>
                    )}

                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{m: 2}}
                    >
                        <Input
                            label="Correo"
                            name='email'
                            type='email'
                            helperText={errors.email?.message}
                            register={register}
                        />

                        <Input
                            label='Contraseña'
                            name='password'
                            type='password'
                            helperText={errors.password?.message}
                            register={register}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            sx={{mt: 3, mb: 2, height: 48}}
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit"/>
                            ) : (
                                'Ingresar'
                            )}
                        </Button>
                        <Grid container>
                            <Link to="/register" variant="body2">
                                ¿No tienes cuenta? Regístrate
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}