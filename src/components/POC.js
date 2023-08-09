import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, RadioGroup, FormControlLabel, FormHelperText, Radio } from '@mui/material';

function POC() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={4} border='1px solid' justifyContent="center"
        alignItems="center">
        <Grid item>
          <TextField
            label="First Name"
            size="small"
            {...register('firstName', { required: true })}
            error={!!errors.firstName}
            helperText={errors.firstName ? 'First Name is required' : ''}
          />
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
        <Grid item>
          <TextField
            size="small"
            label="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
            helperText={errors.email ? 'Valid email is required' : ''}
          />
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
        <Grid item>
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default POC;
