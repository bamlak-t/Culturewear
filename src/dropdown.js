import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';  

export default function Dropdown({sx, dropdownLabel, dropdownData, handleSelect}) {

  return (
    <Autocomplete
      sx={sx}
      options={dropdownData}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        handleSelect(newValue?.label);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={dropdownLabel}
        />
      )}
    />
  );
}