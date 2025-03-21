import { StepConnector, styled } from "@mui/material";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    "& .MuiStepConnector-line": {
        height: 1,
        border: 0,
        transition: "background-color 0.3s ease-in-out",
    },
    "&.Mui-completed .MuiStepConnector-line": {
        backgroundColor: theme.palette.primary.main, // Completed steps turn green
    },
    "&.Mui-active .MuiStepConnector-line": {
        backgroundColor: "grey", // Active step turns blue
    },
    "&:not(.Mui-active):not(.Mui-completed) .MuiStepConnector-line": {
        backgroundColor: "grey", // Default gray for incomplete steps
    },
}));

export default CustomConnector