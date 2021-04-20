import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "@smartb/archetypes-ui-Themes";

const round = (value: number) => {
  return Math.round(value * 100) / 100;
};

export const getShadows = (shadow: string | null) => {
  if (shadow === null) shadow = "0px 3px 10px 0 rgba(0,0,0,0.1)";
  const origin = shadow;
  shadow = shadow.replace(/px/g, "");
  let shadowTab = shadow.split(" ");
  let color = shadowTab[shadowTab.length - 1];
  color = color.replace("rgba(", "");
  color = color.replace(")", "");
  const colorTab = color.split(",");
  let opacity = Number(colorTab[colorTab.length - 1]);
  shadowTab.pop();
  let shadowNumbers = shadowTab.map((element) => Number(element));
  const shadowMultipliers = shadowNumbers.map((element) => round(element / 4));
  let shadows: string[] = [];
  shadows[0] = "0 0px 0px 0 rgba(0,0,0,0)";
  shadows[1] = origin;
  for (var i = 2; i < 25; i++) {
    shadowNumbers = shadowNumbers.map(
      (number, index) => number + shadowMultipliers[index]
    );
    if (opacity < 0.98) opacity += 0.02;
    shadows[i] = `${round(shadowNumbers[0])}px ${round(
      shadowNumbers[1]
    )}px ${round(shadowNumbers[2])}px ${round(shadowNumbers[3])}px rgba(${
      colorTab[0]
    },${colorTab[1]},${colorTab[2]},${round(opacity)})`;
  }
  return shadows;
};

export const getTheme = (): Theme => ({
  primaryColor: localStorage.getItem("primaryColor") ?? "#fec519",
  secondaryColor: localStorage.getItem("secondaryColor") ?? "#edba27",
  tertiaryColor: localStorage.getItem("tertiaryColor") ?? "#e0e0e0",
  shadows: getShadows(localStorage.getItem("shadows")),
});

export default createMuiTheme({
  palette: {
    primary: {
      main: getTheme().primaryColor,
    },
    secondary: {
      main: getTheme().secondaryColor,
    },
  },
});
