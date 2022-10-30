import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CustomButton({ page, onclick }) {

    return (
        <Button sx={{ borderBottom: 1, borderRadius: 0 }} variant="secondary" onClick={onclick}>
            {page}
        </Button>
    )
}