import React from 'react';
import { IFilm } from '../../type/IFilm';

interface IFormProps {
    films: IFilm[];
}
class FilmDetails extends React.Component<IFormProps> {

    render() {
        return (
            <div className="film-details">
                <h1 className="section-title">DETAILS</h1>
            </div>
        )
    }
}

export { FilmDetails }