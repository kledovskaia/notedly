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
  const { updateLoadingState } = useContext(LoadingContext);

  useEffect(() => {
    updateLoadingState({ [type]: result[1].loading });
  }, [result[1].loading]);

  return result;
};
