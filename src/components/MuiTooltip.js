import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const MuiTooltip = () => {
    return (
        <Tooltip
            title='Delete'
            placement='right'
            arrow
            enterDelay={200}
            leaveDelay={700}>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}