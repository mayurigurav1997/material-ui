import React, {useState} from 'react'
import { Rating, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
    const [value, setValue] = useState(null)
    console.log(value)
    const handleChange = (event, number) => {
        setValue(number)
    }
    return (
        <Stack spacing={2}>
            {/* readOnly , highlightselectedOnly */}
            <Rating value={value} onChange={handleChange}
                precision={0.5}
                size="large"
                icon={<FavoriteIcon fontSize='inherit' color='error' />}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            />
        </Stack>
    )
}
