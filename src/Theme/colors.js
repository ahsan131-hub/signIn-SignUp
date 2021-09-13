const colors = {
  primary: "#011c38", //main theme Color  , blue
  secondary: "#ea6645", // theme color 2 , Orange Color
  white: "#FFFFFF", // White
  black: "#000000", //black
  lightBlack: "rgba(0, 0, 0, 0.87)", //light black
  highlighter: "#f8f9fa", // shade of white
  lightGray: "rgb(213, 212, 210)", // light gray
  error: "#d50000", //red
  success: "#4caf50",
  warning: "#ff9800",
  info: "#2196f3", //light blue
  lightBorderColor:"#e8eaed"
};

export const ColorGradient = {
  purple:
    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  lightSkyBlue: `linear-gradient(
		rgb(246, 247, 250),
		rgb(247, 248, 251),
		rgb(252, 253, 254),
		rgb(254, 254, 255) 
	)`,
};

export const ColorPalette = {
  primary: {
    main: colors.primary,
    light: "#052446",
    dark: "#021427",
  },
  secondary: {
    main: colors.secondary,
    light: "#e06343",
    dark: "rgb(228, 89, 54)",
  },
  error: {
    main: colors.error,
    light: "#dd3333",
    dark: "#950000",
  },
  background: {
    main: colors.white,
    light: "#ffffff",
    dark: "#b2b2b2",
  },
  warning: {
    main: colors.warning,
    light: "#ffb74d",
    dark: "#f57c00",
  },
  info: {
    main: colors.info,
    light: "#64b5f6",
    dark: "#1976d2",
  },
  success: {
    main: colors.success,
    light: "#81c784",
    dark: "#388e3c",
  },
};

export default colors;
