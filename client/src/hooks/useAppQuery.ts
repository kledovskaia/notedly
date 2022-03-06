import { useQuery } from '@apollo/client';
import * as queries from '../graphql/query';

type TQuery = keyof typeof queries;

export const useAppQuery = <T>(type: TQuery) => {
  return useQuery<T>(queries[type]);
};
