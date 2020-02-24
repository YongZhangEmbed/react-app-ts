import React from 'react';
import { FilmPoster } from './index';
import { IFilm } from '../../type/IFilm';
import { Grid, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { compose } from 'recompose';

const styles = () => createStyles({
    filmRow: {
        position: 'relative',
        marginBottom: '0.2rem',
        fontSize: '0.5em',
        backgroundColor: 'white',
    }
});

interface IFormProps {
    film: IFilm;
}

type AllProps = IFormProps & WithStyles<typeof styles>;

class FilmRowImp extends React.Component<AllProps> {

    getFullYear = (release_date: string) => {
        return new Date(release_date).getFullYear();
    }

    render() {
        // console.log(JSON.stringify(this.props, null, 4));
        const { film, classes } = this.props;

        return (
            <div key={film.id} className={classes.filmRow}>
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

export const FilmRow = compose<AllProps, IFormProps>(withStyles(styles))(FilmRowImp);