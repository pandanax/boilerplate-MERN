import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import useQueryCurrentUser from '../../hooks/user/useQueryCurrentUser';
import {ListItemIcon, Menu, MenuItem} from '@mui/material';
import {Logout} from '@mui/icons-material';
import './Menu.css';


export default function AccountMenu() {

    let navigate = useNavigate();

    const {data: user, isLoading: isUserLoading, error: userError} = useQueryCurrentUser();

    const logout = () => {
        localStorage.setItem('token', '');
        window.location.href = '/';
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'space-between',
                mt: 2
            }}>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{minWidth: 100}}>
                        <RouterLink to="/">Home</RouterLink>
                    </Typography>
                    <Typography sx={{minWidth: 100}}>
                        <RouterLink to="/about">About</RouterLink>
                    </Typography>
                </Box>

                {userError &&
                <Box sx={{display: 'flex'}}>

                    <Typography sx={{minWidth: 100}}>
                        <RouterLink to="/auth">Войти</RouterLink>
                    </Typography>

                    <Typography sx={{minWidth: 100}}>
                        <RouterLink to="/registration">Зарегистрироваться</RouterLink>
                    </Typography>
                </Box>
                }

                {!isUserLoading && !userError && user &&
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {/*<Avatar sx={{ width: 32, height: 32 }}></Avatar>*/}
                        {user && user.firstName} {user && user.lastName}
                    </IconButton>
                </Tooltip>
                }
            </Box>
            {!isUserLoading && user &&
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                {/*<MenuItem>
                        <Avatar />
                            First
                    </MenuItem>
                    <MenuItem>
                        <Avatar />
                        Second
                    </MenuItem>
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>*/}

                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Выйти
                </MenuItem>

            </Menu>
            }
        </nav>
    );
}
