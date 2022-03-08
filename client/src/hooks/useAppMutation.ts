import { OperationVariables, useMutation } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { LoadingContext } from '../context/Loading';
import * as mutations from '../graphql/mutation';

type TMutation = keyof typeof mutations;

export const useAppMutation = <T>(
  type: TMutation,
  options?: OperationVariables
) => {
  const result = useMutation<T>(mutations[type], options);

  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [, { loading }] = result;

  useEffect(() => {
    if (loading !== isLoading) setIsLoading(loading);
  }, [loading]);

  return result;
};
