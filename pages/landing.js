import Header from '../src/header'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Dropdown from '../src/dropdown';
import { useState, useEffect } from 'react'
import ListingTile from '../src/listingTile';
import TagDropdown from '../src/tagDropdown';
import {sortByData, filterByData, designsData, userData, processData} from '../src/mockdata'


export default function Profile() {
    const [sortBy, setSortBy] = useState('Newest')
    const [filterBy, setFilterBy] = useState()
    const [search, setSearch] = useState('')
    const [postListing, setListing] = useState([])

    console.log(search, sortBy, filterBy);


    const handleSort = (value) => {
        setSortBy(value)
    }

    const handleFilter = (value) => {
        console.log(value)
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

        const allPosts = processData();

        setListing(allPosts);

    }, [])

    return (
        <>
            <Header />
            <Grid container mt={1} spacing={2}>
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
                                    <Grid key={post.id} item xs={3.5} style={{ marginLeft: 0, marginTop: 50 }}>
                                        <ListingTile post={post} />
                                    </Grid>
                                )
                            })}
                            </Grid>
                        )
                    })
                }


            </Grid>
        </>
    )
}