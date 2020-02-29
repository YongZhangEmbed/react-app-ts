import { FilmStore } from './filmStore'
import { GuestStore } from './gueststore'

export class RootStore {
    filmStore = new FilmStore();
    guestStore = new GuestStore();
}

export interface IWithStores {
    rootStore: RootStore
}