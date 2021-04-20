import React from "react";
import { ThemeContextProvider } from "@smartb/archetypes-ui-themes";
import { getTheme } from "../docs/Theme/Theme";

export const parameters = {
  options: {
    storySort: {
      order: [
        "Overview",
        ["Getting started", "Cheatsheet"],
        "Components",
        "Forms",
        "Layout",
      ],
    },
  },
};

export const withThemeProvider = (Story) => {
  return (
    <ThemeContextProvider theme={getTheme()}>
      <Story />
    </ThemeContextProvider>
  );
};

export const decorators = [withThemeProvider];
