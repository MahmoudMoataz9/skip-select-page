import { Grid2 } from "@mui/material"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <Grid2 size={'grow'}>
      <Outlet />
    </Grid2>
  )
}

export default AppLayout
