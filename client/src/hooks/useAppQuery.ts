import { OperationVariables, useQuery } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { LoadingContext } from '../context/Loading';
import * as queries from '../graphql/query';

type TQuery = keyof typeof queries;

export const useAppQuery = <T>(type: TQuery, options?: OperationVariables) => {
  const result = useQuery<T>(queries[type], options);
  const { updateLoadingState } = useContext(LoadingContext);

  useEffect(() => {
    updateLoadingState({ [type]: result.loading });
  }, [result.loading]);

  return result;
};
