import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "../../packages/components/src/ThemeContextProvider";

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

export const myTheme: Theme = {
  hex: {
    primaryColor: "#fec519",
    secondaryColor: "#edba27",
    tertiaryColor: "#e0e0e0",
  },
  rgb: {
    primaryColor: "254, 197, 25",
    secondaryColor: "237, 186, 39",
    tertiaryColor: "224, 224, 224",
  },
  shadows: getShadows(localStorage.getItem("shadow")),
};

export default createMuiTheme({
  palette: {
    primary: {
      main: myTheme.hex.primaryColor,
    },
    secondary: {
      main: myTheme.hex.secondaryColor,
    },
  },
});
