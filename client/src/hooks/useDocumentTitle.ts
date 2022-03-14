import { useContext, useEffect } from 'react';
import { LoadingContext } from '../context/Loading';

export const useDocumentTitle = (title: string) => {
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    document.title = `${isLoading ? 'Loading...' : title} | Notedly`;
  }, [title, isLoading]);
};
