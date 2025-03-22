import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { AppProvider, useApp } from "./contexts/AppContext";
import { ReactNode } from "react";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { darkMode } = useApp()

  const _theme = theme(darkMode ? true : false)

  return (
    <ThemeProvider theme={_theme}>
      {children}
    </ThemeProvider>
  )
}

export default function App() {

  return (
    <AppProvider>
      <ThemeWrapper>
        <RouterProvider router={router} />
      </ThemeWrapper>
    </AppProvider>
  )
}