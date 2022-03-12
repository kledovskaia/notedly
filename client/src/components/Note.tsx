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
import DeleteIcon from '@mui/icons-material/Delete';
import { FC, useContext } from 'react';
import { Link, Markdown, NoteContainer } from '../styles';
import { AuthContext } from '../context/Auth';
import { useAppMutation } from '../hooks/useAppMutation';
import {
  GET_MY_FAVORITE_NOTES,
  GET_MY_NOTES,
  GET_NOTES,
} from '../graphql/query';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  note: TNote;
};

export const Note: FC<Props> = ({ note }) => {
  const { userData } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [toggleFavorite] = useAppMutation('TOGGLE_FAVORITE', {
    refetchQueries: [
      { query: GET_MY_FAVORITE_NOTES },
      { query: GET_NOTES },
      { query: GET_MY_NOTES },
    ],
  });
  const [deleteNote] = useAppMutation('DELETE_NOTE', {
    refetchQueries: [
      { query: GET_NOTES },
      { query: GET_MY_FAVORITE_NOTES },
      { query: GET_MY_NOTES },
    ],
    onCompleted: () => {
      if (location.pathname === `/note/${note.id}`) navigate('/');
    },
  });

  const handleToggleFavorite = () => {
    toggleFavorite({
      variables: {
        id: note.id,
      },
    });
  };
  const handleDelete = () => {
    deleteNote({
      variables: {
        id: note.id,
      },
    });
  };

  return (
    <NoteContainer>
      <CardHeader
        avatar={<Avatar src={note.author.avatar} />}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography color="text.secondary">{note.favoriteCount}</Typography>
            <IconButton onClick={handleToggleFavorite}>
              {userData &&
              !!(note?.favoritedBy || [])?.find(
                (user) => user.id === userData.id
              ) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            {userData && userData.id === note.author.id && (
              <>
                <Link to={`/edit/${note.id}`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </Box>
        }
        title={<Typography>{note.author.username}</Typography>}
        subheader={timean.fromNow(new Date(note.createdAt))}
      />
      <Link to={`/note/${note.id}`}>
        <CardContent>
          <Typography variant="body1" color="text.primary">
            <Markdown>{note.content}</Markdown>
          </Typography>
        </CardContent>
      </Link>
    </NoteContainer>
  );
};
