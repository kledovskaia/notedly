import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC } from 'react';

type Props = {
  note: TNote;
};

export const Note: FC<Props> = ({ note }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={note.author.avatar}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <FavoriteBorderIcon />
          </IconButton>
        }
        title={note.author.username}
        subheader={note.createdAt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>
    </Card>
  );
};
