import Header from '../src/header'
import Grid from '@mui/material/Grid';
import TagDropdown from '../src/tagDropdown';
import Dropdown from '../src/dropdown';
import { sortByData, tailorInfo, filterByData, processData, socials } from '../src/mockdata'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import ListingTile from '../src/listingTile';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile({ user: authOUser }) {

  const [sortBy, setSortBy] = useState('Newest')
  const [filterBy, setFilterBy] = useState()
  const [postListing, setListing] = useState([])
  const [tabValue, setTabVal] = useState('posts');
  const [user, setUser] = useState('')
  const [tailor, setTailor] = useState('')
  const [reviewList, setReviewList] = useState([])
  const [revUserList, setRevUserList] = useState([]) 
  const [clothsList, setClothsList] = useState([])

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


  console.log(sortBy, filterBy);

  useEffect(() => {
    console.log('authOUser', authOUser)
    const populate = async () => {
      const allPosts = processData(3);
      const currentUser = await (await axios.get("/api/users/me")).data.userData
      // const usr = await getUser(authOUser?.id);
      currentUser.isTailor = true
      if (currentUser.isTailor) {
        // get tailor data
        const tail = (await axios.get(`/api/tailors/${authOUser.sid}`)).data.tailorData
        const revs = (await axios.get(`/api/reviews/${authOUser.sid}`)).data.reviewsData
        const revUsrs = []
        const revCloth = []

        for (let i = 0; i < revs.length; i++) {
          const revUsr = (await axios.get(`/api/users/${revs[i].userId}`)).data.userData
          const revCloth = (await axios.get(`/api/designs/${revs[i].designId}`)).data.designData

          revUsrs.push(revUsr)
          revCloth.push(revCloth)
        }

        console.log('rev', revs)
        setClothsList(revCloth)
        setRevUserList(revUsrs)
        setTailor(tail)
        setReviewList(revs)
      }
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
        <Stack direction="column" spacing={2} sx={{ flex: '5' }}>

          <Box>
            <Tabs
              value={tabValue}
              onChange={handleChangeTab}
            >
              <Tab
                value="posts"
                label="Posting"
              />
              {user.isTailor && (
                <Tab
                  value="reviews"
                  label="Reviews"
                />
              )}

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
                  <Box sx={{ width: '100%', height: '700px' }}>
                    <Stack direction="column" spacing={3} sx={{ padding: 3 }}>
                      {
                        reviewList.map((rev, index) => {
                          return (
                            <Paper key={index} variant="outlined" sx={{ height: 'auto' }}>
                              <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>

                                <CardHeader
                                  avatar={
                                    <Avatar sx={{ bgcolor: 'white', overflow: 'ellipsis' }} aria-label="recipe" src={revUserList[index]?.picture}>
                                      R
                                    </Avatar>
                                  }
                                  title={user?.isTailor ? revUserList[index]?.name + " - Tailor" : revUserList[index]?.name}
                                />
                                <Typography variant="body2">{rev.body}</Typography>
                                <Avatar sx={{ bgcolor: 'white' }} aria-label="recipe" src={clothsList[index]?.picture}>
                                      C
                                </Avatar>
                              </Stack>
                            </Paper>
                          )
                        })
                      }
                    </Stack>
                  </Box>
                )
            }
          </Box>
        </Stack>

        <Box sx={{ flex: '1', height: '800px' }}>
          <Stack direction="column" spacing={2} sx={{ flex: '2' }}>
            <Typography component="legend" fontWeight="bold">Socials</Typography>
            <Stack direction="row" spacing={2} sx={{ flex: '2' }}>
              {user?.socials?.map(s => {
                return (
                  <Link href={user[s]}>
                    {socials[s]}
                  </Link>
                )
              })}
            </Stack>
            {
              user.isTailor
              && (
                <Stack direction="column" spacing={2} sx={{ flex: '2' }}>
                  <Typography component="legend" fontWeight="bold">Reviews</Typography>
                  {
                    Object.keys(rCatagories).map(catagory => {
                      return (
                        <>
                          <Typography component="legend">{rCatagories[catagory]}</Typography>
                          <Rating
                            value={tailor.rating[catagory]}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                          />
                        </>
                      )
                    })
                  }
                </Stack>
              )
            }


          </Stack>

        </Box>
      </Stack>
    </div>
  )
}

export default withPageAuthRequired(Profile)