import { Dispatch, memo, SetStateAction, useMemo } from 'react'
import '../../hover.css'
import { Button, Divider, Grid, Grid2, Typography, useTheme } from '@mui/material'
import { ArrowForward, CheckCircle, DoNotDisturb, LocalShippingOutlined, Warning } from '@mui/icons-material'
import { ISkip } from '../../types'
import { useApp } from '../../contexts/AppContext'

const SkipCard = memo(({ skip, selectedSkip, setSelectedSkip, isList }: { skip: ISkip, selectedSkip: number | undefined, setSelectedSkip: Dispatch<SetStateAction<number | undefined>>, isList?: boolean }) => {
    const theme = useTheme()
    const { darkMode } = useApp()

    const isSelected: boolean = useMemo(() => skip.id === selectedSkip, [skip, selectedSkip])

    return (
        <Grid2 size={'grow'} container flexDirection={isList ? 'row' : 'column'} bgcolor={theme.palette.background.paper} padding={2} borderRadius={2} spacing={2} boxShadow={'0 4px 10px rgba(0, 0, 0, 0.2);'} sx={{
            borderWidth: 2,
            borderColor: isSelected ? theme.palette.primary.main : darkMode ? theme.palette.grey[600] : theme.palette.grey[300],
            borderStyle: 'solid',
            transition: 'border-color 0.5s ease, background-color 0.2s ease',
            cursor: 'pointer',
            '&:hover': {
                borderColor: isSelected ? theme.palette.primary.main : darkMode ? theme.palette.primary.dark : theme.palette.primary.light,
            }
        }}
            onClick={() => setSelectedSkip(skip.id)}
        >
            <Grid2 container padding={2} size={isList ? 3 : undefined} width={isList ? undefined : '100%'} height={200} flexDirection={'column'} justifyContent={'space-between'} borderRadius={2} sx={{
                backgroundImage: "url('card-header.jpeg')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <Grid2 display={'flex'} justifyContent={'end'}>
                    <Grid2 paddingX={2} paddingY={0.5} bgcolor={theme.palette.primary.main} borderRadius={8}>
                        <Typography fontWeight={'bold'} color='white'>{skip.size} Yards</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>

            <Grid2 container flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Grid2 container spacing={1} flexDirection={isList ? 'column' : 'row'} justifyContent={isList ? undefined : 'space-between'} display={'flex'} alignItems={'center'}>
                    <Grid2 container display={'flex'} alignItems={'end'}>
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
                </Grid2>

                <Grid2 container sx={{ color: 'white' }}>
                    <Grid2 container spacing={0.5} display={'flex'} alignItems={'center'} bgcolor={skip.allowed_on_road ? theme.palette.success.main : theme.palette.warning.main} paddingX={1} paddingY={0.2} borderRadius={10} sx={{ opacity: 0.8 }}>
                        <Grid2 display={'flex'} alignItems={'center'}>
                            {skip.allowed_on_road ? <CheckCircle fontSize="small" /> : <Warning fontSize="small" />}
                        </Grid2>
                        <Grid2>
                            <Typography variant="body2">
                                {skip.allowed_on_road ? 'Allowed on Road' : 'No Road Placement'}
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={0.5} display={'flex'} alignItems={'center'} bgcolor={skip.allows_heavy_waste ? theme.palette.success.main : theme.palette.error.main} paddingX={1} paddingY={0.2} borderRadius={10} sx={{ opacity: 0.8 }}>
                        <Grid2 display={'flex'} alignItems={'center'}>
                            {skip.allows_heavy_waste ? <CheckCircle fontSize="small" /> : <DoNotDisturb fontSize="small" />}
                        </Grid2>
                        <Grid2>
                            <Typography variant="body2">
                                {skip.allows_heavy_waste ? 'Allows Heavy Waste' : 'No Heavy Waste'}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>

            </Grid2>

            <Grid2 container flexDirection={'column'} justifyContent={'space-around'} marginLeft={isList ? 'auto' : undefined}>

                <Grid2 container paddingTop={2} display={'flex'} flexDirection={'column'} spacing={1}>
                    <Grid2 container display={'flex'} alignItems={'end'}>
                        <Grid2>
                            <Typography variant="h5" fontWeight={'bold'} sx={{ color: isSelected ? theme.palette.primary.light : undefined, transition: 'color 0.2s ease' }}>£{(skip.price_before_vat + (skip.price_before_vat * (skip.vat / 100))).toFixed(2)}</Typography>
                        </Grid2>
                        <Grid2>
                            <Typography color="text.secondary">per week (VAT included)</Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 display={skip.transport_cost ? 'flex' : 'none'}>
                        <Typography color="text.secondary">+ <span style={{ color: isSelected ? theme.palette.primary.light : theme.palette.text.primary, transition: 'color 0.2s ease' }}>£{skip.transport_cost}</span> transport fee</Typography>
                    </Grid2>
                    <Grid2 display={skip.per_tonne_cost ? 'flex' : 'none'}>
                        <Typography color="text.secondary">+ <span style={{ color: isSelected ? theme.palette.primary.light : theme.palette.text.primary, transition: 'color 0.2s ease' }}>£{skip.per_tonne_cost}</span> per tonne (waste disposal)</Typography>
                    </Grid2>
                </Grid2>

                <Divider flexItem sx={{ bgcolor: theme.palette.grey[700] }} />

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

        </Grid2>
    )
})

export default SkipCard