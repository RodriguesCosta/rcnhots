import React, {createContext, useCallback, useState, useContext} from 'react';

interface LoadingContextData {
  loading: boolean;
  setLoading(loading: boolean): void;
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export const LoadingProvider: React.FC = ({children}) => {
  const [loadingState, setLoadingState] = useState(false);

  const setLoading = useCallback((loading) => {
    setLoadingState(loading);
  }, []);

  return (
    <LoadingContext.Provider value={{loading: loadingState, setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within an LoadingProvider');
  }

  return context;
}
