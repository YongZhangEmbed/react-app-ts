import { observable } from "mobx";

export class GuestStore {
    @observable guestName: string = 'test guest name'
}