import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = () => responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#0037c1',
        },
        text:{
            primary: '#fff',
            secondary: 'grey'
        },
        background: {
            paper: '#1c1c1c',
            default: '#121212',
        }
    },
}));