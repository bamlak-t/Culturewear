import Header from '../src/header'
import Grid from '@mui/material/Grid';
import TagDropdown from '../src/tagDropdown';
import Dropdown from '../src/dropdown';
import { sortByData, getUser, filterByData, processData } from '../src/mockdata'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import ListingTile from '../src/listingTile';
import axios from 'axios';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile({ user: authOUser }) {

  const [sortBy, setSortBy] = useState('Newest')
  const [filterBy, setFilterBy] = useState()
  const [search, setSearch] = useState('')
  const [postListing, setListing] = useState([])
  const [tabValue, setTabVal] = useState('posts');
  const [user, setUser] = useState('')

  const handleChangeTab = (event, newValue) => {
    setTabVal(newValue);
  };

  console.log(search, sortBy, filterBy);

  useEffect(() => {
    console.log('authOUser', authOUser)
    const populate = async () => {
      const allPosts = processData(3);
      const currentUser = await axios.get("/api/users/me")
      // const usr = await getUser(authOUser?.id);

      setUser(currentUser)
      setListing(allPosts);
    }

    populate()
  }, [])

  const handleSort = (value) => {
    setSortBy(value)
  }

  const handleFilter = (value) => {
    console.log(value)
    setFilterBy(value)
  }

  return (
    <div>
      <Header />
      <Grid container mt={1} spacing={2}>
        <Grid item xs={7}>

          <CardHeader
            avatar={
              <Avatar sx={{ marginLeft: 5, bgcolor: 'white', overflow: 'ellipsis' }} aria-label="recipe" src={user?.picture}>
                R
              </Avatar>
            }
            title={user?.isTailor ? user?.name + " - Tailor" : user?.name}
          // action={
          //   <Avatar sx={{ bgcolor: 'white' }} aria-label="recipe">
          //     <Typography variant="body1" fontWeight="bold" color="text.secondary">
          //       £{price}

          //     </Typography>
          //   </Avatar>
          // }
          />
        </Grid>
        <Grid item xs={2}>
          <Dropdown sx={{ width: '150px', marginLeft: 'auto' }} dropdownLabel={'Sort by...'} dropdownData={sortByData} handleSelect={handleSort} />
        </Grid>
        <Grid item xs={2} ml={1}>
          <TagDropdown sx={{ width: '300px', marginLeft: 'auto' }} dropdownLabel={'Filter...'} dropdownData={filterByData} handleSelect={handleFilter} />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2} m={5}>
        <Stack direction="column" spacing={2} sx={{ flex: '2' }}>

          <Box>
            <Tabs
              value={tabValue}
              onChange={handleChangeTab}
            >
              <Tab
                value="posts"
                label="Posting"
              />
              { }
              <Tab
                value="reviews"
                label="Reviews"
              />
            </Tabs>
          </Box>
          <Box sx={{}}>
            {
              tabValue === "posts"
                ? (
                  <Box sx={{ width: '100%', height: '700px' }}>

                    {postListing.map((triple, index) => {
                      return (
                        <Grid container xs={11} style={{ justifyContent: 'space-around', margin: 'auto' }} key={index}>
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
                  </Box>
                )
                : (
                  <Box sx={{ width: '100%', height: '700px', bgcolor: 'red' }}>test</Box>
                )
            }
          </Box>
        </Stack>

        <Box sx={{ flex: '1', height: '800px', bgcolor: 'red' }}>

        </Box>
      </Stack>
    </div>
  )
}

export default withPageAuthRequired(Profile)