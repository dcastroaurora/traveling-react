import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider,Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Rating from '@mui/material/Rating';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props:{
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props:{
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
})

const TourCard = ({tour}) => {
    return ( 
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img
                        src={tour.image}
                        alt=""
                        className="img"
                    />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box 
                            sx={{
                                display:"flex",
                                alignItems: "center",
                            }}>
                            <AccessTime sx={{width: 12.5}} />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.duration}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display:"flex",
                                alignItems: "center",
                            }}
                            marginTop={3}>
                            <Rating name="read-only" value={tour.rating} precision={0.5} size="small" readOnly />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginLeft={0}>
                               From C $ {tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};

export default TourCard;