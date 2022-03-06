import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC } from 'react';
import Home from '@mui/icons-material/Home';
import MyNotes from '@mui/icons-material/Description';
import Favorites from '@mui/icons-material/Bookmarks';
import GitHub from '@mui/icons-material/GitHub';
import { Link } from '../styles';
import { useLocation } from 'react-router-dom';

type Props = {
  open: boolean;
};

const links = [
  { anchor: 'Home', src: '/', Icon: Home },
  { anchor: 'My Notes', src: '/my-notes', Icon: MyNotes },
  { anchor: 'Favorites', src: '/favorites', Icon: Favorites },
];

export const Navigation: FC<Props> = ({ open }) => {
  const { pathname } = useLocation();
  return (
    <List>
      {links.map(({ anchor, src, Icon }) => (
        <Link key={src} to={src}>
          <ListItemButton
            selected={src === '/' ? pathname === src : pathname.startsWith(src)}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Icon />
            </ListItemIcon>
            <ListItemText primary={anchor} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      ))}
      <Divider />
      <a
        target="_blank"
        href="https://github.com/kledovskaia/notedly"
        rel="noreferrer"
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <GitHub />
          </ListItemIcon>
          <ListItemText primary="Source code" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </a>
    </List>
  );
};
