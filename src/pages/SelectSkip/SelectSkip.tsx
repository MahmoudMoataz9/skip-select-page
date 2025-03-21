import { Grid2, Typography } from "@mui/material"
import { memo, useCallback, useEffect } from "react"
import skipsController from "../../controllers/skipsController"

const SelectSkip = memo(() => {

  useEffect(() => { fetchSkips() }, [])

  const fetchSkips = useCallback(() => skipsController.fetchAll().then(skips => console.log(skips)), [])

  return (
    <Grid2 container flexDirection={'column'} size={'grow'} spacing={2}>
      <Grid2 display={'flex'} justifyContent={'center'}>
        <Typography variant="h4" fontWeight={'bold'}>Choose Your Skip Size</Typography>
      </Grid2>
      <Grid2 display={'flex'} justifyContent={'center'}>
        <Typography variant="h6" color="text.secondary">Select the skip size that best suits your needs</Typography>
      </Grid2>
    </Grid2>
  )
})

export default SelectSkip
