import Header from '../src/header'
import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

function Account({ user: authOUser }) {

    const [prodName, setProdName] = useState('')
    const [prodDesc, setProdDesc] = useState('')
    const [prodTags, setProdTags] = useState('')
    const [curUser, setCurUsr] = useState('')

    const [prodPricing, setProdPrice] = useState()
    const [prodImg, setProdImg] = useState('')

    const rCatagories = {
        "deliveryTime": "Delivery Time", "fit": "Fit", "materialQuality": "Material Quality", "responseTime": "Response Time"
    }

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
                        style={{marginTop: 30}}
                        value={prodName}
                        onChange={e => handleChange(e, "name")}
                    />
                    <TextField
                        id="outlined-name"
                        label="Surname"
                        style={{marginTop: 30}}
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />
                    <TextField
                        id="outlined-name"
                        label="E-mail"
                        style={{marginTop: 30}}
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />

                </Stack>

                <Stack direction="row" spacing={2} justifyContent="space-around">




                </Stack>

                <Stack direction="column" spacing={5}>

                    <TextField
                        id="outlined-name"
                        label="Twitter"
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />
                    <TextField
                        id="outlined-name"
                        label="Facebook"
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />
                    <TextField
                        id="outlined-name"
                        label="E-mail"
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />
                    <TextField
                        id="outlined-name"
                        label="Instagram"
                        value={prodDesc}
                        onChange={e => handleChange(e, "desc")}
                    />
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