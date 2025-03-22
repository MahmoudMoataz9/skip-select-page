import { memo } from 'react'
import { Grid2, Skeleton, useTheme } from '@mui/material'

const SkipCardSkeleton = memo(() => {
    const theme = useTheme()

    return (
        <Grid2 size={'grow'} container flexDirection={'column'} bgcolor={'rgba(0,0,0,0.05)'} padding={2} borderRadius={2} spacing={2} sx={{
            borderWidth: 2,
            borderColor: theme.palette.grey[600],
            borderStyle: 'solid',
        }}
        >

            <Grid2 padding={2} width={'100%'} height={200} sx={{
                backgroundColor: 'rgba(0,0,0,0.05)'
            }}>
                <Grid2 display={'flex'} justifyContent={'end'}>
                    <Grid2 paddingX={2} paddingY={0.5} bgcolor={'rgba(0,0,0,0.05)'} borderRadius={8}>
                        <Skeleton variant="rounded" width={90} height={30} sx={{ borderRadius: 50 }} />
                    </Grid2>
                </Grid2>
            </Grid2>

            <Grid2 container display={'flex'} alignItems={'end'}>
                <Skeleton variant="rounded" width={150} height={30} />
            </Grid2>

            <Grid2 container>
                <Skeleton variant="rounded" width={200} height={20} />
            </Grid2>

            <Grid2 container paddingTop={2} display={'flex'} alignItems={'end'} spacing={1}>
                <Skeleton variant="rounded" width={120} height={40} />
            </Grid2>

            <Grid2>
                <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
            </Grid2>

        </Grid2>
    )
})

export default SkipCardSkeleton