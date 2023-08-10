import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, RadioGroup, FormControlLabel, FormHelperText, Radio, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

function POC() {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container lg={12} spacing={4} border='1px solid' justifyContent="center" sx={{ m: 2 }}
      >
        <Grid container lg={7} justifyContent="space-between" item direction="row">
          <Grid item>
            <Typography variant="h6" >
              First Name:
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="First Name"
              size="small"
              {...register('firstName', { required: true })}
              error={!!errors.firstName}
              helperText={errors.firstName ? 'First Name is required' : ''}
            />
          </Grid>
        </Grid>
        <Grid container lg={7} justifyContent="space-between" item direction="row">
          <Grid item>
            <Typography variant="h6" >
              Last Name:
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Last Name"
              size="small"
              {...register('lastName', { required: true })}
              error={!!errors.lastName}
              helperText={errors.lastName ? 'Last Name is required' : ''}
            />
          </Grid>
        </Grid>
        <Grid container lg={7} justifyContent="space-between" item direction="row">
          <Grid item>
            <Typography variant="h6" >
              Email:
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              size="small"
              label="Email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              error={!!errors.email}
              helperText={errors.email ? 'Valid email is required' : ''}
            />
          </Grid>
        </Grid>
        <Grid container lg={7} justifyContent="space-between" item direction="row">
          <Grid item>
            <Typography variant="h6" >
              Gender:
            </Typography>
          </Grid>
          <Grid item>
            <RadioGroup row aria-label="gender" name="gender" >
              <FormControlLabel
                value="male"
                control={<Radio {...register('gender', { required: 'Gender is required' })} />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio {...register('gender', { required: 'Gender is required' })} />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio {...register('gender', { required: 'Gender is required' })} />}
                label="Other"
              />
            </RadioGroup>
            {errors.gender && (
              <FormHelperText error>
                {errors.gender.message}
              </FormHelperText>
            )}
          </Grid>

        </Grid>
        <Grid container lg={7} justifyContent="space-between" item direction="row">
          <Grid item>
            <Typography variant="h6" >
              Country:
            </Typography>
          </Grid>
          <Grid item>
            <Select
              sx={{ width: "200px" }}
              // size="medium"
              label="Country"
              {...register('country', { required: 'Country is required' })}
              error={!!errors.country}
              labelId="country-select"
            // value={Country}
            >
              <MenuItem value="us">United States</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
              <MenuItem value="uk">United Kingdom</MenuItem>
              <MenuItem value="au">Australia</MenuItem>
            </Select>
            {errors.country && (
              <FormHelperText error>
                {errors.country.message}
              </FormHelperText>
            )}

          </Grid>

        </Grid>
        <Grid item lg={7}>
          <Button type="submit" variant="contained" size="medium">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default POC;
