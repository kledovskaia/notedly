import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

type TLoadingContext = [boolean, Dispatch<SetStateAction<boolean>>];

export const LoadingContext = createContext<TLoadingContext>(
  [] as unknown as TLoadingContext
);

export const LoadingContextProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[isLoading, setIsLoading]}>
      {children}
    </LoadingContext.Provider>
  );
};
