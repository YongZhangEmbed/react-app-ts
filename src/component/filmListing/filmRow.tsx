import React from 'react';
import { FilmPoster } from './index';
import { IFilm } from '../../type/IFilm';
import { Grid, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { compose } from 'recompose';
import withCopyRight from '../../withCopyRight';
import { CustomTextInput } from '../controls';
import { Login } from '../common';

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
    private refInput: any;
    constructor(props: any) {
        super(props)
        this.refInput = React.createRef();
    }

    getFullYear = (release_date: string) => {
        return new Date(release_date).getFullYear();
    }

    focusTextInput = () => {
        // Focus the text input using the raw DOM API
        if (this.refInput) this.refInput.focus();
    };

    componentDidMount() {
        this.refInput.current!.focusTextInput();
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
                            <CustomTextInput ref={this.refInput}></CustomTextInput>
                            <Login />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const WrappedComponent = withCopyRight(FilmRowImp);

export const FilmRow = compose<AllProps, IFormProps>(withStyles(styles))(WrappedComponent);