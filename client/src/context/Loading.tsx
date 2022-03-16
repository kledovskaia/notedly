import { createContext, FC, useEffect, useState } from 'react';

type TLoadingState = { [key in string]: boolean };
type TLoadingContext = {
  isLoading: boolean;
  updateLoadingState: (update: TLoadingState) => void;
};

export const LoadingContext = createContext<TLoadingContext>(
  [] as unknown as TLoadingContext
);

export const LoadingContextProvider: FC = ({ children }) => {
  const [loadingState, setLoadingState] = useState<TLoadingState>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(Object.entries(loadingState).some(([_, value]) => value));
  }, [loadingState]);

  const updateLoadingState = (update: TLoadingState) =>
    setLoadingState((state) => ({ ...state, ...update }));

  return (
    <LoadingContext.Provider value={{ isLoading, updateLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
};
