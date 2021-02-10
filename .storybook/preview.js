import React from "react";
import { ThemeContextProvider } from "../packages/components/src/ThemeContextProvider";
import { myTheme } from "../docs/Theme/Theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const withThemeProvider = (Story) => {
  return (
    <ThemeContextProvider theme={myTheme}>
      <Story />
    </ThemeContextProvider>
  );
};

export const decorators = [withThemeProvider];
