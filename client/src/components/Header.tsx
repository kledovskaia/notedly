import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import { ThemeSwitch } from './ThemeSwitch';
import { MouseEvent, useContext, useState } from 'react';
import { AuthContext } from '../context/Auth';
import { SignInLink, SignUpLink } from '../styles';
import { useAppQuery } from '../hooks/useAppQuery';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

type TDataResponse = {
  me: {
    id: TUser['id'];
    avatar: TUser['avatar'];
    username: TUser['username'];
  };
};

export default function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { data } = useAppQuery<TDataResponse>('GET_MY_BASIC_INFO');

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
  };

  const menuId = 'account-menu';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: 'none' }} position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Notedly
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeSwitch />
            {!isLoggedIn && (
              <>
                <SignUpLink to="/sign-up">Sign Up</SignUpLink>
                <SignInLink to="/sign-in">Sign In</SignInLink>
              </>
            )}
            {isLoggedIn && data && (
              <>
                <Box sx={{ marginRight: '1rem' }}>
                  <Link to="/note/new">
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AddIcon />
                    </IconButton>
                  </Link>
                </Box>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar alt={data?.me?.username} src={data?.me?.avatar} />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <Link to={`/user/${data?.me?.id}`}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
