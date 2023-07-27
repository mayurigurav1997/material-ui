import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import CustomDropdown from './CustomDropdown';

const DropdownWithPlaceholderOutlined = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomDropdown
                label="Select an option"
                options={dropdownOptions}
                register={register}
                required
            />
            {errors['Select an option'] && <p>This field is required.</p>}
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
};

export default DropdownWithPlaceholderOutlined;
