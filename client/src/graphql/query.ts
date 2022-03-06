import { gql } from '@apollo/client';

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
