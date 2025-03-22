import { CalendarTodayOutlined, CreditCardOutlined, DarkMode, DeleteOutline, LightMode, LocalShippingOutlined, LocationOnOutlined, ShieldOutlined } from "@mui/icons-material";
import { Box, Divider, Grid2, IconButton, Step, StepLabel, Stepper, Tooltip, useTheme } from "@mui/material"
import { cloneElement, useCallback, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import CustomConnector from "../components/CustomConnector";
import { useApp } from "../contexts/AppContext";

const steps = [
  { title: 'Postcode', icon: <LocationOnOutlined />, path: 'postcode' },
  { title: 'Waste Type', icon: <DeleteOutline />, path: 'waste-type' },
  { title: 'Select Skip', icon: <LocalShippingOutlined />, path: 'select-skip' },
  { title: 'Permit Check', icon: <ShieldOutlined />, path: 'permit-check' },
  { title: 'Choose Date', icon: <CalendarTodayOutlined />, path: 'choose-date' },
  { title: 'Payment', icon: <CreditCardOutlined />, path: 'payment' },
];

const AppLayout = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { darkMode, setDarkMode } = useApp()

  const [activeStep, setActiveStep] = useState<number>(2);

  useEffect(() => {
    console.log(theme.palette.background.default);

  }, [])

  const handleStepChange = useCallback((path: string, index: number) => {
    setActiveStep(index)
    navigate(path)
  }, [])

  return (
    <Grid2 container size={'grow'} minHeight={'100vh'} paddingBottom={24} display={'flex'} justifyContent={'center'} bgcolor={theme.palette.background.default} sx={{ color: theme.palette.text.primary, transition: 'background-color 0.2s ease' }}>

      <Grid2 container size={'grow'} flexDirection={'column'} maxWidth={1300} paddingX={2} spacing={{ xs: 2, md: 4 }} paddingTop={{ xs: 2, md: 4 }}>

        <Grid2 container width={'100%'} spacing={2} display={'flex'} alignItems={'center'}>
          <Grid2 size={'grow'} sx={{ overflowX: 'auto' }}>
            <Stepper activeStep={activeStep} connector={<CustomConnector />}>
              {steps.map((step, index) => {

                const isActive = activeStep >= index;

                return (
                  <Step key={index}>
                    <StepLabel
                      onClick={() => handleStepChange(step.path, index)}
                      sx={{
                        "& .MuiStepLabel-label": {
                          textWrap: 'nowrap',
                          color: isActive ? theme.palette.text.primary : "grey",
                          fontSize: "1.2rem",
                          transition: "all 0.3s ease-in-out",
                          display: { xs: 'none', md: 'flex' },
                        },
                        cursor: isActive ? "pointer" : "not-allowed"
                      }} icon={
                        <Box sx={{ color: isActive ? theme.palette.primary.main : "grey" }}>
                          {cloneElement(step.icon, { fontSize: "large" })}
                        </Box>
                      }>{step.title}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </Grid2>
        </Grid2>

        <Divider flexItem sx={{ bgcolor: theme.palette.grey[600] }} />

        <Grid2>
          <Outlet context={{ activeStep, setActiveStep }} />
        </Grid2>

        <Grid2 position={'fixed'} right={24} bottom={{xs: 140, sm: 100, md: 100, xl: 20}} boxShadow={'0 4px 10px rgba(0, 0, 0, 0.2);'}>
          <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
            <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ borderRadius: 2, border: `2px solid ${theme.palette.grey[600]}`, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary }}>
              {darkMode ? <LightMode fontSize="large" /> : <DarkMode fontSize="large" />}
            </IconButton>
          </Tooltip>
        </Grid2>

      </Grid2>

    </Grid2>
  )
}

export default AppLayout
