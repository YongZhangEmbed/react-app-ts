import React from 'react';
import { FilmRow } from './index';
import { IFilm } from '../../type/IFilm';

interface IFormProps {
    films: IFilm[];
}

class FilmListing extends React.Component<IFormProps> {

    render() {
        const allFilms = this.props.films.map((film, idx) => {
            return <FilmRow film={film} key={idx}></FilmRow>
        });

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}

export { FilmListing }