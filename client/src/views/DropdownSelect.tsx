import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { type SelectChangeEvent } from '@mui/material/Select'

interface DropdownProps {
  options: string[]
  onChange: (selectedOption: string) => void
  initValue: string
}

export const DropdownSelect: React.FC<DropdownProps> = ({
  options,
  onChange,
  initValue,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(initValue)

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    setSelectedOption(value)
    onChange(value)
  }

  return (
    <FormControl fullWidth>
      <Select
        placeholder={selectedOption}
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select Option' }}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
