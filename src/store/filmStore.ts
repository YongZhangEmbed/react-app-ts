import { observable, action } from 'mobx'

class FilmStore {
    @observable filmName: string = 'Kong Fu';

    @action
    setFileName(filmName: string) {
        this.filmName = filmName;
    }
}

export { FilmStore };