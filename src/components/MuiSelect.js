import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiSelect = () => {
    const [country, setCountry] = useState([])
    console.log(country)
    const handleChange = (event) => {
        setCountry(event.target.value)
    }
    return (
        <Box width='40%' className='p-4'>
            <TextField
                label='Select Country'
                select
                value={country}
                onChange={handleChange}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
                size="small"
                color="secondary"
                helperText="Please select your country"

            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austalia</MenuItem>
            </TextField>
        </Box>
    )
}
