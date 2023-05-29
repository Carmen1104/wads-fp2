import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";


export const tokens = (mode) => ({
    ...(mode === 'dark'
    ? {
        grey: {
          100: "#d3d6da",
          200: "#a7aeb5",
          300: "#7c8591",
          400: "#505d6c",
          500: "#243447",
          600: "#1d2a39",
          700: "#161f2b",
          800: "#0e151c",
          900: "#070a0e"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509",
        },
        greenAccent: {
            100: "#cfe2e2",
            200: "#a0c5c5",
            300: "#70a7a8",
            400: "#418a8b",
            500: "#116d6e",
            600: "#0e5758",
            700: "#0a4142",
            800: "#072c2c",
            900: "#031616"
        },
        redAccent: {
            100: "#f3d2df",
            200: "#e8a5be",
            300: "#dc799e",
            400: "#d14c7d",
            500: "#c51f5d",
            600: "#9e194a",
            700: "#761338",
            800: "#4f0c25",
            900: "#270613",
        },
        blueAccent: {
            100: "#cfe6e7",
            200: "#9fcdcf",
            300: "#6eb5b8",
            400: "#3e9ca0",
            500: "#0e8388",
            600: "#0b696d",
            700: "#084f52",
            800: "#063436",
            900: "#031a1b"
        },
    }
    : {
        grey: {
            100: "#070a0e",
            200: "#0e151c",
            300: "#161f2b",
            400: "#1d2a39",
            500: "#243447",
            600: "#505d6c",
            700: "#7c8591",
            800: "#a7aeb5",
            900: "#d3d6da",
        },
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0", 
            500: "#141b2d",
            600: "#1F2A40",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
        },
        greenAccent: {
            100: "#031616",
            200: "#072c2c",
            300: "#0a4142",
            400: "#0e5758",
            500: "#116d6e",
            600: "#418a8b",
            700: "#70a7a8",
            800: "#a0c5c5",
            900: "#cfe2e2",
        },
        redAccent: {
            100: "#270613",
            200: "#4f0c25",
            300: "#761338",
            400: "#9e194a",
            500: "#c51f5d",
            600: "#d14c7d",
            700: "#dc799e",
            800: "#e8a5be",
            900: "#f3d2df",
        },
            blueAccent: {
              100: "#031a1b",
              200: "#063436",
              300: "#084f52",
              400: "#0b696d",
              500: "#0e8388",
              600: "#3e9ca0",
              700: "#6eb5b8",
              800: "#9fcdcf",
              900: "#cfe6e7",
          },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
            }),
      },
      typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  
  // context for color mode
  export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };
