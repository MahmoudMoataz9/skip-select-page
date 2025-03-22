import { StepConnector, styled } from "@mui/material";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    // paddingLeft: '24px',
    // paddingRight: '24px',
    "& .MuiStepConnector-line": {
        height: 1,
        border: 0,
        transition: "background-color 0.3s ease-in-out",

    },
    "&.Mui-completed .MuiStepConnector-line": {
        backgroundColor: theme.palette.primary.main,
    },
    "&.Mui-active .MuiStepConnector-line": {
        backgroundColor: "grey",
    },
    "&:not(.Mui-active):not(.Mui-completed) .MuiStepConnector-line": {
        backgroundColor: "grey",
    },
}));

export default CustomConnector