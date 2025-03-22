import { Dispatch, memo, SetStateAction, useMemo } from 'react'
import '../../hover.css'
import { Button, Grid2, Typography, useTheme } from '@mui/material'
import { ArrowForward, CheckCircle, DoNotDisturb, LocalShippingOutlined, Warning } from '@mui/icons-material'
import { ISkip } from '../../types'

const SkipCard = memo(({ skip, selectedSkip, setSelectedSkip }: { skip: ISkip, selectedSkip: number | undefined, setSelectedSkip: Dispatch<SetStateAction<number | undefined>> }) => {
    const theme = useTheme()

    const isSelected: boolean = useMemo(() => skip.id === selectedSkip, [skip, selectedSkip])

    return (
        <Grid2 size={'grow'} container flexDirection={'column'} bgcolor={theme.palette.background.paper} padding={2} borderRadius={2} spacing={2} sx={{
            borderWidth: 2,
            borderColor: isSelected ? theme.palette.primary.main : theme.palette.grey[600],
            borderStyle: 'solid',
            transition: 'border-color 0.5s ease',
            cursor: 'pointer',
            '&:hover': {
                borderColor: isSelected ? theme.palette.primary.main : theme.palette.primary.dark,
            }
        }}
            onClick={() => setSelectedSkip(skip.id)}
        >

            <Grid2 container padding={2} width={'100%'} height={200} flexDirection={'column'} justifyContent={'space-between'} sx={{
                backgroundImage: "url('card-header.jpeg')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <Grid2 display={'flex'} justifyContent={'end'}>
                    <Grid2 paddingX={2} paddingY={0.5} bgcolor={theme.palette.primary.main} borderRadius={8}>
                        <Typography fontWeight={'bold'}>{skip.size} Yards</Typography>
                    </Grid2>
                </Grid2>
                <Grid2 display={skip.size >= 10 ? 'flex' : 'none'}>
                    <Grid2 container paddingX={1} paddingY={0.5} bgcolor={'black'} borderRadius={4} display={'flex'} alignItems={'center'} spacing={1} sx={{ color: theme.palette.warning.light}}>
                        <Grid2>
                            <Warning fontSize='small' />
                        </Grid2>
                        <Grid2>
                            <Typography variant='body2'>Private Property Only</Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>

            <Grid2 container spacing={1} display={'flex'} alignItems={'end'}>
                <Grid2>
                    <LocalShippingOutlined fontSize="medium" sx={{ color: isSelected ? theme.palette.primary.light : undefined, transition: 'color 0.2s ease' }} />
                </Grid2>
                <Grid2>
                    <Typography variant="h6" fontWeight={'bold'}>{skip.size} Yard Skip</Typography>
                </Grid2>
            </Grid2>

            <Grid2>
                <Typography color="text.secondary">{skip.hire_period_days} day hire period</Typography>
            </Grid2>

            <Grid2 container>
                <Grid2 container spacing={0.5} display={'flex'} alignItems={'center'} bgcolor={skip.allowed_on_road ? theme.palette.success.main : theme.palette.warning.main} paddingX={1} paddingY={0.2} borderRadius={10}>
                    <Grid2>
                        {skip.allowed_on_road ? <CheckCircle fontSize="small" /> : <Warning fontSize="small" />}
                    </Grid2>
                    <Grid2>
                        <Typography variant="body2">
                            {skip.allowed_on_road ? 'Allowed on Road' : 'No Road Placement'}
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={0.5} display={'flex'} alignItems={'center'} bgcolor={skip.allows_heavy_waste ? theme.palette.success.main : theme.palette.error.main} paddingX={1} paddingY={0.2} borderRadius={10}>
                    <Grid2>
                        {skip.allows_heavy_waste ? <CheckCircle fontSize="small" /> : <DoNotDisturb fontSize="small" />}
                    </Grid2>
                    <Grid2>
                        <Typography variant="body2">
                            {skip.allows_heavy_waste ? 'Allows Heavy Waste' : 'No Heavy Waste'}
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>

            <Grid2 container paddingTop={2} display={'flex'} alignItems={'end'} spacing={1}>
                <Grid2>
                    <Typography variant="h5" fontWeight={'bold'} sx={{ color: isSelected ? theme.palette.primary.light : undefined, transition: 'color 0.2s ease' }}>£{(skip.price_before_vat + (skip.price_before_vat * (skip.vat / 100))).toFixed(2)}</Typography>
                </Grid2>
                <Grid2>
                    <Typography color="text.secondary">Inc. VAT</Typography>
                </Grid2>
            </Grid2>

            <Grid2>
                <Button className="hvr-sweep-to-right" disableElevation disableRipple variant="contained" fullWidth endIcon={<ArrowForward />}
                    sx={{
                        bgcolor: isSelected ? theme.palette.primary.main : theme.palette.grey[600],
                        textTransform: "none",
                        padding: 2,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    {isSelected ? 'Selected' : 'Select This Skip'}
                </Button>
            </Grid2>

        </Grid2>
    )
})

export default SkipCard