import timean from 'timean';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { FC } from 'react';
import { Link, Markdown } from '../styles';

type Props = {
  note: TNote;
};

export const Note: FC<Props> = ({ note }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Link to={`/user/${note.author.id}`}>
            <Avatar src={note.author.avatar} />
          </Link>
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography color="text.secondary">{note.favoriteCount}</Typography>
            <IconButton>
              {/* <FavoriteIcon color="error" /> */}
              <FavoriteBorderIcon />
            </IconButton>
            <Link to={`/edit/${note.id}`}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        }
        title={
          <Link to={`/user/${note.author.id}`}>{note.author.username}</Link>
        }
        subheader={timean.fromNow(new Date(note.createdAt))}
      />
      <Link to={`/note/${note.id}`}>
        <CardContent>
          <Typography variant="body1" color="text.primary">
            <Markdown>{note.content}</Markdown>
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
