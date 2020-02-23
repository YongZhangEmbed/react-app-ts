import React from 'react';
import { FilmPoster } from './index';
import { IFilm } from '../../type/IFilm';
import { Grid } from '@material-ui/core';

interface IFormProps {
    film: IFilm;
}

class FilmRow extends React.Component<IFormProps> {

    getFullYear = (release_date: string) => {
        return new Date(release_date).getFullYear();
    }

    render() {
        const { film } = this.props;

        return (
            <div key={film.id} className="film-row">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Grid item sm={8} md={8} lg={8} xl={8}>
                        <FilmPoster film={film}></FilmPoster>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4} xl={4}>
                        <div className="film-summary">
                            <h1>{film.title}</h1>
                            <p>{this.getFullYear(film.release_date)}</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export { FilmRow }