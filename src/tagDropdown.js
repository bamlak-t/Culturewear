import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function TagDropdown({sx, dropdownLabel, dropdownData, handleSelect }) {
  return (
    <Stack spacing={3} sx={sx}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={dropdownData}
        limitTags={3}
        getOptionLabel={(option) => option.label}
        defaultValue={[]}
        onChange={(event, newValue) => {
          console.log(event, newValue);
            const newList = newValue.map(val => val.label)
            handleSelect(newList);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={dropdownLabel}
          />
        )}
      />
    </Stack>
  );
}