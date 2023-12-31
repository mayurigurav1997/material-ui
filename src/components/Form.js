import React from 'react'
import { Box, Paper, Stack, TextField, FormLabel, Grid, Typography, FormControl, RadioGroup, FormControlLabel, FormHelperText, Radio, Rating, Select, InputLabel, MenuItem, FormGroup, Checkbox } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const Form = () => {
    return (
        <Paper >
            <Box  sx={{ mx: 'auto', width: '95%' }}>
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
                        <Typography component='h3' gutterBottom>Job Title:</Typography>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">title</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={"Manager"}>Manager</MenuItem>
                                <MenuItem value={"Team Leader"}>Team Leader</MenuItem>
                                <MenuItem value={"Sr. Product Developer"}>Sr. Product Developer</MenuItem>
                                <MenuItem value={"Jr. Product Developer"}>Jr. Product Developer</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
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
                        <Typography component='h3' gutterBottom>Skills:</Typography>
                        <FormControl>
                            {/* <FormLabel>Skills</FormLabel> */}
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value='html'
                                            // checked={skills.includes('html')}
                                            // onChange={handleSkillChange}
                                        />
                                    }
                                    label='HTML'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // value='css'
                                            // checked={skills.includes('css')}
                                            // onChange={handleSkillChange}
                                        />
                                    }
                                    label='CSS'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // value='javascript'
                                            // checked={skills.includes('javascript')}
                                            // onChange={handleSkillChange}
                                        />
                                    }
                                    label='JavaScript'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // value='javascript'
                                            // checked={skills.includes('javascript')}
                                            // onChange={handleSkillChange}
                                        />
                                    }
                                    label='ReactJS'
                                />
                            </FormGroup>
                        </FormControl>
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
