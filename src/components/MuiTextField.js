import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiTextField = () => {
    const [password, setPassword] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant='outlined' />
                <TextField label="Name" variant='filled' />
                <TextField label="Name" variant='standard' />
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant='outlined' size='small' color='secondary' />
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Form Input" required />
                <TextField label="Form Required"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!password}
                    helperText={password ? "Do not share your password with anyone" : "Required"} />
                <TextField label="Read Only"
                    InputProps={{ readOnly: true }} />
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} />
                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }} />
            </Stack>
        </Stack>
    )
}
