import Header from '../src/header'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Dropdown from '../src/dropdown';
import { useState, useEffect } from 'react'
import ListingTile from '../src/listingTile';
import TagDropdown from '../src/tagDropdown';
import { sortByData, filterByData, designsData, userData, processData } from '../src/mockdata'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


function Landing({user: authOUser}) {
    const [sortBy, setSortBy] = useState('Newest')
    const [filterBy, setFilterBy] = useState()
    const [search, setSearch] = useState('')
    const [postListing, setListing] = useState([])
    const [curUser, setCurUsr] = useState('')

    // console.log(search, sortBy, filterBy);


    const handleSort = (value) => {
        setSortBy(value)
    }

    const handleFilter = (value) => {
        // const listing = postListing.filter(triple => { 
        //     triple.map(trip => {
        //         console.log('val', val)
        //         const inc = value.map(filter => trip?.tags.includes(filter)) 
        //         return inc.length > 0
        //     })
            
        // })
        // console.log(pstIdx, listing)
        setFilterBy(value)
    }

    useEffect(() => {
        // TILE data
        // - poster id
        // - poster name
        // - poster role
        // - cloth image
        // - cloth price
        // - cloth tags
        const process = async() => {
            // const usr = (await axios.get(`/api/users/me`)).data.userData
            // console.log('usr', usr)
            // setCurUsr(usr)
        }

        const allPosts = processData();

        setListing(allPosts);

    }, [])

    return (
        <div>
            <Header />
            <Grid container mt={5} spacing={2}>
                <Grid item xs={7}>
                    <TextField sx={{ marginLeft: '50px' }} id="standard-basic" label="Search" variant="standard" onChange={e => setSearch(e.target.value)} />
                </Grid>
                <Grid item xs={2}>
                    <Dropdown sx={{ width: '150px', marginLeft: 'auto' }} dropdownLabel={'Sort by...'} dropdownData={sortByData} handleSelect={handleSort} />
                </Grid>
                <Grid item xs={2} ml={1}>
                    <TagDropdown sx={{ width: '300px', marginLeft: 'auto' }} dropdownLabel={'Filter...'} dropdownData={filterByData} handleSelect={handleFilter} />
                </Grid>

                {
                    postListing.map((triple, index) => {
                        return (
                            <Grid container xs={11} item style={{justifyContent: 'space-around', margin: 'auto'}} key={index}>
                            {triple.map((post) => {
                                return (
                                    <Grid key={post.id} item xs={3.7} style={{ marginLeft: 0, marginTop: 50 }}>
                                        <ListingTile post={post} />
                                    </Grid>
                                )
                            })}
                            </Grid>
                        )
                    })
                }


            </Grid>
        </div>
    )
}

export default withPageAuthRequired(Landing)