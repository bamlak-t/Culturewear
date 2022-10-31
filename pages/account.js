import Header from '../src/header'
import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { socials } from '../src/mockdata'
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
function Account({ user: authOUser }) {

    const [prodName, setProdName] = useState('')
    const [prodDesc, setProdDesc] = useState('')
    const [prodTags, setProdTags] = useState('')
    const [curUser, setCurUsr] = useState('')

    const [prodPricing, setProdPrice] = useState()
    const [prodImg, setProdImg] = useState('') 

    const [allDisabled, setAllDisabled] = useState(true)


    useEffect(() => {
        const settings = async () => {
            const usr = (await axios.get(`/api/users/me`)).data.userData
            console.log('usr', usr)
            setCurUsr(usr)
        }
        settings()

    }, [])

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

    return (
        <div>
            <Header />
            <h2 style={{ width: '100%', textAlign: 'center' }}>Edit profile</h2>
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-around', margin: 'auto', width: '70%', marginTop: 0 }}>
                <Stack direction="row" spacing={2} justifyContent="space-around">

                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'white', overflow: 'ellipsis', height: 80, width: 80 }} aria-label="recipe" src={curUser?.picture}>
                                R
                            </Avatar>
                        }
                    />
                    <TextField
                        id="outlined-name"
                        label="Firstname"
                        style={{ marginTop: 30, flex: 1 }}
                        disabled={allDisabled}
                        value={prodName}
                        onChange={e => handleChange(e, "name")}
                    />
                    <TextField
                        id="outlined-name"
                        label="Surname"
                        style={{ marginTop: 30, flex: 1 }}
                        disabled={allDisabled}
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />
                        <Button style={{height: 60, margin: 25}} variant="contained" onClick={() => setAllDisabled(!allDisabled)}>{allDisabled ? ("Edit") : ("Save")}</Button>

                </Stack>

                <Stack direction="row" spacing={2} justifyContent="space-around">




                </Stack>

                <Stack direction="column" spacing={5}>

                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Instagram</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={prodPricing}
                            disabled={allDisabled}
                            onChange={e => handleChange(e, "price")}
                            startAdornment={<InputAdornment position="start">{socials["instagram"]}</InputAdornment>}
                            label="Price"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Facebook</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={prodPricing}
                            disabled={allDisabled}
                            onChange={e => handleChange(e, "price")}
                            startAdornment={<InputAdornment position="start">{socials["facebook"]}</InputAdornment>}
                            label="Price"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Whatsapp</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={prodPricing}
                            disabled={allDisabled}
                            onChange={e => handleChange(e, "price")}
                            startAdornment={<InputAdornment position="start">{socials["watsapp"]}</InputAdornment>}
                            label="Price"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={prodPricing}
                            disabled={allDisabled}
                            onChange={e => handleChange(e, "price")}
                            startAdornment={<InputAdornment position="start">{socials["gmail"]}</InputAdornment>}
                            label="Price"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Twitter</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={prodPricing}
                            disabled={allDisabled}
                            onChange={e => handleChange(e, "price")}
                            startAdornment={<InputAdornment position="start">{socials["twitter"]}</InputAdornment>}
                            label="Price"
                        />
                    </FormControl>
                    {/* <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                        <Button variant="outlined">Cancel</Button>
                        <Button variant="contained">Submit</Button>
                    </Stack> */}
                </Stack>
            </Stack>
        </div>
    )
}

export default withPageAuthRequired(Account)