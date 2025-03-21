import { CalendarTodayOutlined, Check, CreditCardOutlined, DeleteOutline, LocalShippingOutlined, LocationOnOutlined, ShieldOutlined } from "@mui/icons-material";
import { Box, Button, Grid2, Step, StepConnector, StepIcon, StepLabel, Stepper, styled, useTheme } from "@mui/material"
import { cloneElement, useCallback, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import CustomConnector from "../components/CustomConnector";

const steps = [
  { title: 'Postcode', icon: <LocationOnOutlined />, path: 'postcode' },
  { title: 'Waste Type', icon: <DeleteOutline />, path: 'waste-type' },
  { title: 'Skip Select', icon: <LocalShippingOutlined />, path: 'skip-select' },
  { title: 'Permit Check', icon: <ShieldOutlined />, path: 'permit-check' },
  { title: 'Choose Date', icon: <CalendarTodayOutlined />, path: 'choose-date' },
  { title: 'Payment', icon: <CreditCardOutlined />, path: 'payment' },
];

const AppLayout = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  const [activeStep, setActiveStep] = useState<number>(2);

  useEffect(() => {
    console.log(theme.palette.background.default);

  }, [])

  const handleStepChange = useCallback((path: string, index: number) => {
    setActiveStep(index)
    navigate(path)
  }, [])

  return (
    <Grid2 container size={'grow'} minHeight={'100vh'} display={'flex'} justifyContent={'center'} bgcolor={theme.palette.background.default} sx={{ color: theme.palette.text.primary }}>

      <Grid2 container size={'grow'} flexDirection={'column'} maxWidth={1400}>

        <Grid2 paddingY={4} width={'100%'} sx={{ overflowX: 'auto' }}>
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
                        color: isActive ? theme.palette.text.primary : "gray",
                        fontSize: "1.2rem",
                        transition: "all 0.3s ease-in-out",
                      },
                      cursor: isActive ? "pointer" : "not-allowed"
                    }} icon={
                      <Box sx={{ color: isActive ? theme.palette.primary.main : "gray" }}>
                        {cloneElement(step.icon, { fontSize: "large" })}
                      </Box>
                    }>{step.title}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </Grid2>

        <Grid2>
          <Outlet />
        </Grid2>

      </Grid2>

    </Grid2>
  )
}

export default AppLayout
