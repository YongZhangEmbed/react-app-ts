import React from 'react';
import { IFilm } from '../../type/IFilm';

interface IFormProps {
    film: IFilm;
}

class FilmPoster extends React.Component<IFormProps> {

    posterBaseUrl = "https://image.tmdb.org/t/p/w780/";

    render() {
        const { film } = this.props;
        return (
            <div className="film-poster">
                <img src={this.posterBaseUrl + film.poster_path} alt="" />
            </div>
        )
    }
}

export { FilmPoster }