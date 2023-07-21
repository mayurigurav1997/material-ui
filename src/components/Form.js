import React from 'react'
import { Box, Paper, Stack, TextField, FormLabel, Grid, Typography, FormControl, RadioGroup, FormControlLabel, FormHelperText, Radio, Rating, Select, InputLabel, MenuItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const Form = () => {
    return (
        <Paper >
            <Box border='1px solid' sx={{ mx: 'auto', width: '95%' }}>
                <Typography variant='h3' align='center' gutterBottom>Personal Info</Typography>
                <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={{ xs: 2, sm: 4, md: 5 }}
                >
                    <Grid item sm={6} xs={12} fullWidth>
                        <Typography component='h3' gutterBottom>First Name:</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Enter First Name"
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} >
                        <Typography component='h3' gutterBottom>Last Name:</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Enter Last Name"
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} >
                        <Typography component='h3' gutterBottom>Title:</Typography>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <Typography component='h3' gutterBottom>Email:</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Email"
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <Typography component='h3' gutterBottom>Phone:</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Phone"
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <FormControl>
                            <FormLabel>Years of Experiance</FormLabel>
                            <RadioGroup name='job-experiance-group-label'
                                // value={value}
                                // onChange={handleChange}
                                row
                            >
                                <FormControlLabel control={<Radio size='medium' />} label='Male' value='Male' />
                                <FormControlLabel control={<Radio />} label='Female' value='Female' />
                                <FormControlLabel control={<Radio />} label='Other' value='Other' />
                            </RadioGroup>
                            <FormHelperText>Select only one</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <Typography component='h3' gutterBottom>How would you rate your experience:</Typography>
                        <Rating
                            // value={value} onChange={handleChange}
                            precision={0.5}
                            size="large"
                            icon={<FavoriteIcon fontSize='inherit' color='error' />}
                            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography component='h3' gutterBottom>Message:</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Message"
                            size='small'
                            fullWidth
                            multiline
                            rows={5}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}
