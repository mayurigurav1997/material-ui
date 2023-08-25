import { Stack, Chip, Avatar } from '@mui/material'
import { useState } from 'react'
import FaceIcon from "@mui/icons-material/Face"

export const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete = (chipToDelete) => {
        setChips(chips.filter(chip => chip !== chipToDelete))
    }
    return (
        <Stack direction='row' spacing={2}>
            <Chip label='Chip' color='primary' size='small' icon={<FaceIcon />} />
            <Chip
                label='Chip Outlined'
                variant='outlined'
                color='secondary'
                avatar={<Avatar>V</Avatar>}
            />
            <Chip label='Click' color='success' onClick={() => alert('Clicked')} />
            <Chip
                label='Delete'
                color='error'
                onClick={() => alert('Clicked')}
                onDelete={() => alert('Delete')}
            />
            {chips.map(chip => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))}
        </Stack>
    )
}