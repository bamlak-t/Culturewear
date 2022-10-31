import Header from '../src/header'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { userData, getUser } from '../src/mockdata';

export default function SearchTailor() {

  const [tailorList, setTailorList] = useState([])
  const [averageRatings, setAverageRatings] = useState([])

  useEffect(() => {
    const process = async () => {
      const list = userData//(await axios.get(`/api/tailors`)).data.tailorsData
      console.log('dev list ', list)
      const tailorUser = []
      const averageR = []
      for (let i = 0; i < list.length; i++) {
        const tail = list[i]
        const usr = getUser(tail.id) //(await axios.get(`/api/users/${tail.id}`)).data.userData
        tailorUser.push(usr)
        averageR.push(tail?.averageRating)
        console.log('devusr ', tailorUser)

      }
      setAverageRatings(averageR)
      setTailorList(tailorUser)
      console.log('dev final', tailorList)
    }
    process()
  }, [])

  return (
    <div>
      <Header />
      <Stack direction="column" spacing={2} sx={{ justifyContent: 'center' }}>
        <TextField sx={{ width: 500, margin: 'auto', marginTop: 10 }} id="outlined-basic" label="Search" variant="outlined" />
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {
            tailorList.map((usr, index) => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={usr?.name[0].toUpperCase()} src={usr?.picture} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={usr?.name}
                      secondary={
                        <div>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            <Rating
                              value={Math.floor(Math.random() * 4) + 2}
                              precision={0.5}
                              readOnly
                              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                          </Typography>
                        </div>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              )
            })
          }

        </List>
      </Stack>
    </div>
  )
}