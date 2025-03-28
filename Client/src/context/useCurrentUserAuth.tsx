import React, { createContext, useContext, ReactNode } from "react";
import { useGetCurrentUser } from "../Api/get/getCurrentUser";
import { CurrentUser } from "../Utility/Interface/GlobalInterface";

interface CurrentUserContextType {
  currentUser: CurrentUser | null;
  loading: boolean;
  refetchCurrentUser: () => Promise<void>;
}

const currentUserContext = createContext<CurrentUserContextType | undefined>(
  undefined
);

export const CurrentUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { currentUser, loading, refetch } = useGetCurrentUser();

  return (
    <currentUserContext.Provider
      value={{
        currentUser,
        loading,
        refetchCurrentUser: refetch,
      }}
    >
      {children}
    </currentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(currentUserContext);
  if (!context)
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  return context;
};
