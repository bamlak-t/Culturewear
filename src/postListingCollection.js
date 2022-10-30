import Grid from '@mui/material/Grid';
import ListingTile from '../src/listingTile';

export default function PostListingCollection({postListing}) {

    postListing.map((triple, index) => {
        return (
            <Grid container xs={11} style={{justifyContent: 'space-around', margin: 'auto'}} key={index}>
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