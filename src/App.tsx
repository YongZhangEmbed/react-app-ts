import React from 'react';
import './App.css';
import TMDB from './api/TMDB';
import { FilmListing } from './component/filmListing';
import { FilmDetails } from './component/filmDetails';
import { Grid } from '@material-ui/core';


function App() {
  return (
    // <div className="#root" >
    //   <div className="film-library">
    <div >
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item sm={6} md={6} lg={6} xl={6}>
          <FilmListing films={TMDB.films}></FilmListing>
        </Grid>
        <Grid item sm={6} md={6} lg={6} xl={6}>
          <FilmDetails films={TMDB.films}></FilmDetails>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
