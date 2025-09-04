import { Theme } from "@emotion/react";
import React from "react";

export interface AppContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const AppContext = React.createContext<AppContextProps>(
  {} as AppContextProps
);
