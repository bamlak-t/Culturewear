import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useState } from 'react'
import Chip from '@mui/material/Chip';
import CardActionArea from '@mui/material/CardActionArea';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const PostingModal = ({ props }) => {
    const { expanded, handleExpandClick, post } = props
    const {
        id,
        name,
        clothName,
        isTailor,
        clothPicture,
        price,
        tags,
        uploadTime,
        description,
        picture,
    } = post;

    return (
        <Modal
            open={props.expanded}
            onClose={props.handleExpandClick}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ width: 700, height: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, borderRadius: 10 }}>
                <Link href="/profile">
                    <ListingTile height={500} post={post} />
                </Link>
            </Box>
        </Modal>
    )
}

export default function ListingTile({ height, post }) {
    const [expanded, setExpanded] = useState(false);
    const {
        id,
        name,
        clothName,
        isTailor,
        clothPicture,
        price,
        tags,
        uploadTime,
        description,
        picture,
    } = post;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ width: '100%', height: height ? height : 300, borderRadius: 7 }} style={{
            backgroundImage: `url(${clothPicture})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginBottom: 0,
            display: 'flex',
            alignItems: 'flex-end'
        }}>
            <CardActionArea onClick={handleExpandClick}>


                {/* <CardMedia
                    component="img"
                    height="194"
                    // image={clothPicture}
                />  */}
                <div style={{ flex: 1 }}></div>
                <CardContent style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), black)' }}>

                    {/* <Typography variant="body2" color="white">
                        {clothName}
                    </Typography> */}
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500], overflow: 'ellipsis' }} aria-label="recipe" src={picture}>
                                {name[0].toUpperCase()}
                            </Avatar>
                        }
                        sx={{ color: 'white' }}
                        title={isTailor ? name + " - Tailor" : name}
                        // {clothName}
                        // subheader={isTailor ? name + " - Tailor" : name}
                        action={
                            <Avatar sx={{ bgcolor: 'white', width: 50 }} aria-label="recipe">
                                <Typography variant="body1" fontWeight="bold" color="text.secondary">
                                    £{price}

                                </Typography>
                            </Avatar>
                        }
                    />
                    {
                        tags.map((tag) => {
                            return (
                                <Chip
                                    sx={{ margin: 0.5, backgroundColor: 'white' }}
                                    label={tag}
                                />
                            )
                        })
                    }
                </CardContent>
            </CardActionArea>
            <PostingModal props={{ expanded, handleExpandClick, post }} />
        </Card>
    );
}
