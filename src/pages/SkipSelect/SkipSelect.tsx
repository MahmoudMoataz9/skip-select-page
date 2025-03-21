import { Grid2, Typography } from "@mui/material"
import { memo } from "react"

const SkipSelect = memo(() => {
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

export default SkipSelect
