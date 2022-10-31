import Header from '../src/header'
import Grid from '@mui/material/Grid';
import TagDropdown from '../src/tagDropdown';
import Dropdown from '../src/dropdown';
import { sortByData, tailorInfo, filterByData, processData, socials } from '../src/mockdata'
import { useState, useEffect } from 'react'
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Account({ user: authOUser }) {

    const [prodName, setProdName] = useState('')
    const [prodDesc, setProdDesc] = useState('')
    const [prodTags, setProdTags] = useState([])
    const [prodPricing, setProdPrice] = useState()
    const [prodImg, setProdImg] = useState('')


    const rCatagories = {
        "deliveryTime": "Delivery Time", "fit": "Fit", "materialQuality": "Material Quality", "responseTime": "Response Time"
    }

    const tags = ["Clothing", "Outerwear", "One-piece garment", "Arm", "Shoulder", "Neck", "Waist", "Sleeve", "Gown", "Day dress"]
    const tagsDrop = tags.map(tag => ({ label: tag }))

    console.log(tagsDrop)

    const handleChange = (e, type) => {
        // const [prodName, setProdName] = useState('')
        // const [prodDesc, setProdDesc] = useState('')
        // const [prodTags, setProdTags] = useState('')
        // const [prodPricing, setProdPrice] = useState(0)
        // const [prodImg, setProdImg] = useState('')

        console.log(e, type)

        switch (type) {
            case "name":
                setProdName(e.target.value)
                break
            case "desc":
                setProdDesc(e.target.value)
                break
            case "tags":
                setProdTags(e.target.value)
                break
            case "price":
                setProdPrice(e.target.value)
                break
            case "img":
                setProdImg("https://i.pinimg.com/736x/e9/9c/4d/e99c4de6d8034b75ee7bf388cf4ff707.jpg")
                setProdTags(tagsDrop)
                console.log("IMAGE", prodImg)
                break
        }
    }

    return (
        <div>
            <Header />
            <h2 style={{ width: '100%', textAlign: 'center' }}>Create posting</h2>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-around', margin: 'auto', width: '70%', marginTop: 0 }}>
                <img
                    style={{ border: '1px solid black', borderRadius: 20, overflow: 'hidden' }}
                    height="500"
                    width="500"
                    src={prodImg}
                    alt={''}
                />

                <Stack direction="column" spacing={5}>
                    <TextField
                        id="outlined-name"
                        label="Design Name"
                        value={prodName}
                        onChange={e => handleChange(e, "name")}
                    />
                    <TextField
                        id="outlined-name"
                        label="Description"
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />
                    <TagDropdown sx={{ width: 300 }} dropdownLabel="Tags" dropdownData={prodTags} handleSelect={handleChange} />
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={prodPricing}
                            onChange={e => handleChange(e, "price")}
                            startAdornment={<InputAdornment position="start">£</InputAdornment>}
                            label="Price"
                        />
                    </FormControl>


                    <Button
                        variant="contained"
                        component="label"
                        sx={{ width: '100%' }}
                    >
                        Upload Image
                        <input
                            onChange={e => handleChange(e, "img")}
                            type="file"
                            hidden
                        />
                    </Button>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                        <Button variant="outlined">Cancel</Button>
                        <Link href="/landing">
                            <Button variant="contained">Submit</Button>

                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default withPageAuthRequired(Account)