import React, { useState } from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material';

const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "MONGODB", "SQL"]
const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

export const MuiAutoComplete = () => {
    const [value, setValue] = useState(null)
    let [skill, setSkill] = useState(null)
    console.log(value, skill)

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={params => <TextField {...params} label='Skills' />}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                freeSolo
            />

            <Autocomplete
                options={skillOptions}
                renderInput={params => <TextField {...params} label='Skills' />}
                value={skill}
                onChange={(event, newValue) => {
                    setSkill(newValue)
                }}

            />
        </Stack>
    )
}
