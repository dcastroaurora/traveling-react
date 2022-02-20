import "./App.css";
import * as React from 'react';
import TourCard from './components/TourCard';
import SearcAppBar from './components/AppBar';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import cities from "./data.json";
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className='App'>
      <SearcAppBar />
      <Container sx={{marginY: 5}}>
        {
          cities.map((city) => (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}>
                  Top {city.name} Tours
              </Typography>
              <Grid container spacing={5}>
                {
                  city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)
                }                
              </Grid>
            </>
          ))
        }
      </Container>
    </div>
  );
}

export default App;
