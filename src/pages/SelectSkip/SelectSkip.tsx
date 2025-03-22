import { Button, CircularProgress, Grid2, Typography, useTheme } from "@mui/material"
import { Dispatch, memo, SetStateAction, useCallback, useEffect, useMemo, useState } from "react"
import skipsController from "../../controllers/skipsController"
import { ISkip } from "../../types"
import SkipCard from "../../components/Cards/SkipCard"
import SkipCardSkeleton from "../../components/Skeletons/SkipCardSkeleton"
import { useNavigate, useOutletContext } from "react-router-dom"
import { ArrowForward } from "@mui/icons-material"

interface ContextType {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>
}

const SelectSkip = memo(() => {
  const theme = useTheme()
  const navigate = useNavigate()

  const storedSkip = (): number => {
    const storedValue = localStorage.getItem("selectedSkip");
    return storedValue ? parseInt(storedValue, 10) : 0;
  };

  const [skips, setSkips] = useState<ISkip[]>()
  const [selectedSkip, setSelectedSkip] = useState<number | undefined>(storedSkip)

  const { activeStep, setActiveStep } = useOutletContext<ContextType>();

  useEffect(() => { fetchSkips() }, [])
  useEffect(() => localStorage.setItem('selectedSkip', JSON.stringify(selectedSkip)), [selectedSkip])

  const skipDetails: ISkip | undefined = useMemo(() => skips?.find(s => s.id === selectedSkip), [skips, selectedSkip])

  const fetchSkips = useCallback(() => skipsController.fetchAll().then(skips => setSkips(skips)).catch(error => console.log(error)), [])
  const handleNextStep = useCallback(() => {
    navigate('/permit-check')
    setActiveStep(activeStep + 1)
  }, [])
  const handlePreviousStep = useCallback(() => {
    navigate('/waste-type')
    setActiveStep(activeStep - 1)
  }, [])

  return (
    <Grid2 container flexDirection={'column'} size={'grow'} spacing={2}>

      <Grid2 display={'flex'} justifyContent={'center'}>
        <Typography variant="h4" fontWeight={'bold'}>Choose Your Skip Size</Typography>
      </Grid2>

      <Grid2 display={'flex'} justifyContent={'center'}>
        <Typography variant="h6" color="text.secondary">Select the skip size that best suits your needs</Typography>
      </Grid2>

      <Grid2 container spacing={4} paddingTop={2}>
        <Grid2 container>
          {!skips ? [0, 0, 0].map((_, i) => <Grid2 key={i} size={{ xs: 12, sm: 6, md: 4 }}><SkipCardSkeleton /></Grid2>) : skips.length === 0 ? <Typography> No Skips to Show </Typography> :
            skips.map((s, i) =>
              <Grid2 key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <SkipCard skip={s} selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />
              </Grid2>
            )
          }
        </Grid2>
      </Grid2>

      <Grid2 position={'fixed'} width={'100vw'} display={selectedSkip && selectedSkip !== 0 ? 'flex' : 'none'} justifyContent={'center'} bottom={0} left={0} paddingX={4} paddingY={2} sx={{ pointerEvents: 'none' }}>

        <Grid2 container width={'100%'} maxWidth={1300} height={'100%'} borderRadius={4} spacing={2} paddingX={2} paddingY={1} display={'flex'} alignItems={'center'} justifyContent={'space-between'}
          sx={{
            bgcolor: t => t.palette.background.paper,
            borderColor: t => t.palette.grey[600],
            borderStyle: 'solid',
            borderWidth: 2,
            pointerEvents: 'all',
          }}
        >

          {skipDetails &&
            <Grid2 container display={'flex'} alignItems={'center'}>
              <Grid2>
                <Typography>{skipDetails.size} <span style={{ color: theme.palette.text.secondary }}>Yards</span></Typography>
              </Grid2>
              <Grid2>
                <Typography color="primary.light" variant="h6">£ <span style={{ color: theme.palette.text.primary }}>{(skipDetails.price_before_vat + (skipDetails.price_before_vat * (skipDetails.vat / 100))).toFixed(2)}</span></Typography>
              </Grid2>
              <Grid2>
                <Typography color="text.secondary">{skipDetails.hire_period_days} day hire</Typography>
              </Grid2>
            </Grid2>
          }

          <Grid2 container>
            <Grid2>
              <Button disableElevation disableRipple variant="contained" onClick={handlePreviousStep}
                sx={{
                  paddingX: 1.6,
                  paddingY: 1.2,
                  borderRadius: 2,
                  bgcolor: t => t.palette.grey[600],
                  '&:hover': { bgcolor: t => t.palette.grey[800] }
                }}>Back</Button>
            </Grid2>
            <Grid2>
              <Button disableElevation disableRipple variant="contained" onClick={handleNextStep} endIcon={<ArrowForward />} sx={{ paddingX: 1.8, paddingY: 1.4, borderRadius: 2 }}>Continue</Button>
            </Grid2>
          </Grid2>

        </Grid2>

      </Grid2>

    </Grid2>
  )
})

export default SelectSkip
