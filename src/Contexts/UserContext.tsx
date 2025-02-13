import React, { PropsWithChildren } from "react";

const Context = React.createContext(null);

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Context.Provider value={null}>{children}</Context.Provider>;
};

const use = () => {
  const context = React.useContext(Context);

  if (context) {
    throw new Error("useUser must be used within a UserContext.Provider");
  }
  return context;
};

export const UserContext = {
  Provider,
  use,
};
