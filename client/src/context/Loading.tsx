import { createContext, FC, useState } from 'react';

type TLoadingState = { [key in string]: boolean };
type TLoadingContext = {
  loadingState: TLoadingState;
  updateLoadingState: (update: TLoadingState) => void;
};

export const LoadingContext = createContext<TLoadingContext>(
  [] as unknown as TLoadingContext
);

export const LoadingContextProvider: FC = ({ children }) => {
  const [loadingState, setLoadingState] = useState<TLoadingState>({});

  const updateLoadingState = (update: TLoadingState) =>
    setLoadingState((state) => ({ ...state, ...update }));

  return (
    <LoadingContext.Provider value={{ loadingState, updateLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
};
