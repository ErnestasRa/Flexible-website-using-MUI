import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { Mail, Spa, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
     padding: '0 10px',
     borderRadius: theme.shape.borderRadius,
     width: '40%',
    }));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));

const NavBar:React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>Ernestas R.</Typography>
          <Spa sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search><InputBase placeholder="search.." /></Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: '30px', heigth: '30px' }}
              src="https://i.pinimg.com/originals/a8/f9/f2/a8f9f23219b63a5360b1031d416197cf.png"
              onClick={() => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={() => setOpen(true)}>
            <Avatar sx={{ width: '30px', heigth: '30px' }} src="https://i.pinimg.com/originals/a8/f9/f2/a8f9f23219b63a5360b1031d416197cf.png" />
          </UserBox>
          <Typography variant="h6">Ernestas</Typography>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
  );
    };
export default NavBar;
