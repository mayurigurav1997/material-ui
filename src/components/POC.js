import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';

function POC() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <TextField
            label="First Name"
            {...register('firstName', { required: true })}
            error={!!errors.firstName}
            helperText={errors.firstName ? 'First Name is required' : ''}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Last Name"
            {...register('lastName', { required: true })}
            error={!!errors.lastName}
            helperText={errors.lastName ? 'Last Name is required' : ''}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
            helperText={errors.email ? 'Valid email is required' : ''}
          />
        </Grid>
      </Grid>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default POC;
