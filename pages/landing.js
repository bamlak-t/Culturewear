import Header from '../src/header'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Dropdown from '../src/dropdown';
import { useState, useEffect } from 'react'
import ListingTile from '../src/listingTile';

const sortByData = [
    {
        label: 'Price Low'
    },
    {
        label: 'Price High'
    },
    {
        label: 'Oldest'
    },
    {
        label: 'Newest'
    }
]

const filterByData = [
    {
        label: 'Tags'
    },
    {
        label: 'Male'
    },
    {
        label: 'Female'
    }
]


const designsData = [
    {
        "id":"gi5ZTnIaVgVcg22gjACo",
        "price":100,
        "uploadTime":{
            "_seconds":1667060405,
            "_nanoseconds":189000000
        },
        "description":"A white suit",
        "name":"White Suit",
        "userId":"aYWhqgQpNlb4xae65XM6",
        "picture":"gs://culturewear-bgn-2022.appspot.com/designs/fb269440256032ba64b139a4eed44371.jpg",
        "tags":[
            "Indian"
        ]
    }
]

const userData = [
    {
        "id": "aYWhqgQpNlb4xae65XM6",
        "instagram":"",
        "socials": ["instagram"],
        "name":"Samuel Adekunle",
        "designs":[
           "gi5ZTnIaVgVcg22gjACo"
        ],
        "email":"ebnsamuel@gmail.com",
        "isTailor":false,
        "picture":"https://lh3.googleusercontent.com/a/ALm5wu2TDq6dFNBG98KhlbXK33HS9-cX33nGbKB3FQMQ2A=s96-c"
     }
]

const tailorInfo = [
    {
        "reviewsData":[
           {
              "id":"iqGgwHgXBAAT1ShYDdva",
              "uploadTime":{
                 "_seconds":1667060434,
                 "_nanoseconds":188000000
              },
              "rating":{
                 "responseTime":0,
                 "fit":0,
                 "materialQuality":0,
                 "price":0,
                 "deliveryTime":0
              },
              "averageRating":0,
              "designId":"gi5ZTnIaVgVcg22gjACo",
              "body":"The white suit was really nice",
              "tailorId":"SOGY9Qi0SOHdFAjS4WTL",
              "userId":"aYWhqgQpNlb4xae65XM6"
           }
        ]
     }
]

const socials = [
    "instagram",
    "facebook",
    "watsapp",
    "twitter",
    "gmail"
]

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

        
        const processData = () => {
            const allPosts = []

            designsData.map((design) => {

                const {id, price, uploadTime, tags, picture: clothPicture, userId, description, name: clothName} = design

                const user = (userData.filter(user => user['id'] == userId))[0]

                const {isTailor, picture, name} = user;

                allPosts.push({
                    id,
                    name,
                    isTailor,
                    clothPicture,
                    price,
                    tags,
                    uploadTime,
                    description,
                    picture,
                })
            })

            setListing(allPosts)

            console.log(allPosts)

        }

        processData()

    }, [])

    return (
        <>
            <Header />
            <Grid container mt={1} spacing={2}>
                <Grid item xs={7}>
                    <TextField sx={{ marginLeft: '50px' }} id="standard-basic" label="Search" variant="standard" onChange={e => setSearch(e.target.value)} />
                </Grid>
                <Grid item xs={2}>
                    <Dropdown sx={{ width: '150px' }} dropdownLabel={'Sort by...'} dropdownData={sortByData} handleSelect={handleSort} />
                </Grid>
                <Grid item xs={2} ml={1}>
                    <Dropdown sx={{ width: '150px' }} dropdownLabel={'Filter...'} dropdownData={filterByData} handleSelect={handleFilter} />
                </Grid>

                {
                    postListing.map((post) => {
                        console.log(post)
                        return (
                            <Grid key={post.id} item xs={3}>
                                <ListingTile post={post}/>
                            </Grid>
                        )
                    })
                }

                
            </Grid>
        </>
    )
}