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
import { FC, useContext } from 'react';
import { Link, Markdown } from '../styles';
import { AuthContext } from '../context/Auth';
import { useAppMutation } from '../hooks/useAppMutation';
import {
  GET_MY_FAVORITE_NOTES,
  GET_MY_NOTES,
  GET_NOTES,
} from '../graphql/query';

type Props = {
  note: TNote;
};

export const Note: FC<Props> = ({ note }) => {
  const { userData } = useContext(AuthContext);
  const [toggleFavorite] = useAppMutation('TOGGLE_FAVORITE', {
    refetchQueries: [
      { query: GET_MY_FAVORITE_NOTES },
      { query: GET_NOTES },
      { query: GET_MY_NOTES },
    ],
    onCompleted: ({ toggleFavorite }: any) => {},
  });

  const handleToggleFavorite = () => {
    toggleFavorite({
      variables: {
        id: note.id,
      },
    });
  };

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
              {userData &&
              !!(note?.favoritedBy || [])?.find(
                (user) => user.id === userData.id
              ) ? (
                <FavoriteIcon onClick={handleToggleFavorite} color="error" />
              ) : (
                <FavoriteBorderIcon onClick={handleToggleFavorite} />
              )}
            </IconButton>
            {userData && userData.id === note.author.id && (
              <Link to={`/edit/${note.id}`}>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Link>
            )}
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
