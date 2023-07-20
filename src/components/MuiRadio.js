import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

export const MuiRadio = () => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    console.log(value)
    return (
        <Box>
            <FormControl>
                <FormLabel>Years of Experiance</FormLabel>
                <RadioGroup name='job-experiance-group-label'
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel control={<Radio size='medium' color='secondary' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='6-8' value='6-8' />
                </RadioGroup>
                <FormHelperText>Select only one</FormHelperText>

            </FormControl>
        </Box>
    )
}
