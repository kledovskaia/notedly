import { gql } from '@apollo/client';

export const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      content
      favoriteCount
      createdAt
      updatedAt
      author {
        id
        username
        avatar
      }
    }
  }
`;

export const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        content
        favoriteCount
        createdAt
        updatedAt
        author {
          id
          username
          avatar
        }
      }
    }
  }
`;
export const GET_MY_NOTES = gql`
  query myNotes {
    me {
      notes {
        id
        content
        favoriteCount
        createdAt
        updatedAt
        author {
          id
          username
          avatar
        }
      }
    }
  }
`;
export const GET_MY_FAVORITE_NOTES = gql`
  query myFavoriteNotes {
    me {
      favorites {
        id
        content
        favoriteCount
        createdAt
        updatedAt
        author {
          id
          username
          avatar
        }
      }
    }
  }
`;

export const GET_MY_BASIC_INFO = gql`
  query myHeaderInfo {
    me {
      id
      avatar
      username
    }
  }
`;

export const GET_USER_INFO = gql`
  query userInfo($id: ID!) {
    user(id: $id) {
      id
      username
      avatar
      notes {
        id
        content
        favoriteCount
        createdAt
        updatedAt
        author {
          id
          username
          avatar
        }
      }
      favorites {
        id
        content
        favoriteCount
        createdAt
        updatedAt
        author {
          id
          username
          avatar
        }
      }
    }
  }
`;
