import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CustomDropdown = ({ label, options, register, required }) => {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select label={label} {...register(label, { required })}>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdown;
