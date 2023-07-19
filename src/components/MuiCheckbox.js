import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React, { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
    const [acceptInc, setAcceptInc] = useState(false)
    const [skills, setSkills] = useState([])
    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value)
        if (index === -1) {
            setSkills([...skills, e.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
    }
    console.log(acceptInc)
    const handleChange = (e) => {
        setAcceptInc(e.target.checked)
    }
    return (
        <Box>
            <Box>
                <FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={acceptInc} onChange={handleChange} />}

                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptInc}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value='html'
                                    checked={skills.includes('html')}
                                    onChange={handleSkillChange}
                                />
                            }
                            label='HTML'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value='css'
                                    checked={skills.includes('css')}
                                    onChange={handleSkillChange}
                                />
                            }
                            label='CSS'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value='javascript'
                                    checked={skills.includes('javascript')}
                                    onChange={handleSkillChange}
                                />
                            }
                            label='JavaScript'
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
