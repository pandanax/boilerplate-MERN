import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import useMutationUserAuth, {IAuthData} from '../../hooks/user/useMutationUserAuth';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import useQueryCurrentUser from '../../hooks/user/useQueryCurrentUser';
import {FormHelperText} from '@mui/material';


export default function AuthForm() {
    let navigate = useNavigate();
    const {refetch: refetchCurrentUser} = useQueryCurrentUser();
    const [error, setError] = useState<string | boolean>(false);

    const {mutate: postUserAuth, isLoading} = useMutationUserAuth(async ({success, errorMessage}) => {
        if (success) {
            await refetchCurrentUser();
            return navigate('/');
        } else {
            return setError(errorMessage);
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const params: IAuthData = {
            email: data.get('email') as string,
            password: data.get('password') as string,
        };
        postUserAuth(params);
    };

    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ????????
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="????????????"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/*<FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />*/}

                    {error &&
                    <FormHelperText sx={{color: 'red', textAlign: 'center'}}>
                        {error}
                    </FormHelperText>
                    }

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        disabled={isLoading}
                    >
                        ??????????????????
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link component={RouterLink} to="/registration">
                                ?????? ????????????????? ??????????????????????????????????!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
