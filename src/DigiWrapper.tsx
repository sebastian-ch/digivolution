import { useState } from 'react'
import Box from '@mui/material/Box';


export default function DigiWrapper({ digi }: any) {
    return (
        <Box width='100px' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <img height='32px' width='32px' src={digi?.icon} alt='icon' />
            <Box sx={{ fontWeight: 'bold' }}>{digi?.name}</Box>
        </Box>

    )

}