import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = () => responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#0037c1',
            dark: '#002070',
            light: '#0045f2'
        },
        text: {
            primary: '#fff',
            secondary: 'grey'
        },
        grey: {
            "600": '#2a2a2a'
        },
        background: {
            paper: '#1c1c1c',
            default: '#121212',
        }
    },
}));