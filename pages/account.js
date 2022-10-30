import Header from '../src/header'
import Grid from '@mui/material/Grid';
import TagDropdown from '../src/tagDropdown';
import Dropdown from '../src/dropdown';
import { sortByData, tailorInfo, filterByData, processData, socials } from '../src/mockdata'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Account({ user: authOUser }) {

    const [sortBy, setSortBy] = useState('Newest')
    const [filterBy, setFilterBy] = useState()
    const [postListing, setListing] = useState([])
    const [tabValue, setTabVal] = useState('posts');
    const [user, setUser] = useState('')
    const [tailor, setTailor] = useState('')
    const [reviewList, setReviewList] = useState('')
    const [revUserList, setRevUserList] = useState('')
    // const [clothsList, setClothsList] = useState([])

    const [prodName, setProdName] = useState('')
    const [prodDesc, setProdDesc] = useState('')
    const [prodTags, setProdTags] = useState('')
    const [prodPricing, setProdPrice] = useState()
    const [prodImg, setProdImg] = useState('')

    const rCatagories = {
        "deliveryTime": "Delivery Time", "fit": "Fit", "materialQuality": "Material Quality", "responseTime": "Response Time"
    }

    const handleChangeTab = (event, newValue) => {
        setTabVal(newValue);
    };


    // "id": "aYWhqgQpNlb4xae65XM6",
    // "instagram": "",
    // "socials": ["instagram"],
    // "name": "Samuel Adekunle",
    // "designs": [
    //     "gi5ZTnIaVgVcg22gjACo"
    // ],
    // "email": "ebnsamuel@gmail.com",
    // "isTailor": false,
    // "picture": "https://lh3.googleusercontent.com/a/ALm5wu2TDq6dFNBG98KhlbXK33HS9-cX33nGbKB3FQMQ2A=s96-c"

    // useEffect(() => {
    //     console.log('authOUser', authOUser)
    //     const populate = async () => {
    //         const allPosts = processData(3);
    //         const currentUser = await (await axios.get("/api/users/me")).data.userData
    //         // const usr = await getUser(authOUser?.id);
    //         currentUser.isTailor = true
    //         if (currentUser.isTailor) {
    //             // get tailor data
    //             const tail = (await axios.get(`/api/tailors/${authOUser.sid}`)).data.tailorData
    //             const revs = (await axios.get(`/api/reviews/${authOUser.sid}`)).data.reviewsData
    //             const revUsrs = []
    //             const revCloth = []

    //             for (let i = 0; i < revs.length; i++) {
    //                 const revUsr = (await axios.get(`/api/users/${revs[i].userId}`)).data.userData
    //                 // const revCloth = (await axios.get(`/api/designs/${revs[i].designId}`)).data.designData

    //                 revUsrs.push(revUsr)
    //                 // revCloth.push(revCloth)
    //             }

    //             console.log('rev', revs)
    //             // setClothsList(revCloth)
    //             setRevUserList(revUsrs)
    //             setTailor(tail)
    //             setReviewList(revs)
    //         }
    //         setUser(currentUser)
    //         setListing(allPosts);
    //     }

    //     populate()
    // }, [])

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
                setProdImg(e.target.value)
                break
        }
    }

    const handleFilter = (value) => {
        console.log(value)
        setFilterBy(value)
    }

    return (
        <div>
            <Header />
            <h2 style={{width: '100%', textAlign: 'center'}}>Create posting</h2>
            <Stack direction="row" spacing={2} sx={{ margin: 'auto', width: '70%', marginTop: 0 }}>
                <img
                    style={{ border: '1px solid black' }}
                    height="500"
                    width="500"
                    src={prodImg}
                    alt={''}
                />
                <Button
                    variant="contained"
                    component="label"
                    sx={{ width: 150 }}
                >
                    Upload Image
                    <input
                        type="file"
                        hidden
                    />
                </Button>
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
                    <TagDropdown sx={{ width: 300 }} dropdownLabel="Tags" dropdownData={[]} handleSelect={handleChange} />
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

                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                        <Button variant="outlined">Cancel</Button>
                        <Button variant="contained">Submit</Button>

                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default withPageAuthRequired(Account)