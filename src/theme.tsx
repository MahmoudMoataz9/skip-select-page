import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = (darkMode: boolean) => responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#0037c1',
            dark: '#002070',
            light: '#0045f2'
        },
        text: {
            primary: darkMode ? '#fff' : '#121212',
            secondary: 'grey'
        },
        grey: {
            "600": darkMode ? '#2a2a2a' : '#919191'
        },
        background: {
            paper: darkMode ? '#1c1c1c' : '#f0f0f0',
            default: darkMode ? '#121212' : '#fff',
        }
    },
}));