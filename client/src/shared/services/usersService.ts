import { MainStoreSGA, User } from '@/types/mainStore'
import { CommonService } from './commonService';
import { useMainStore } from '@/store';
import { createPinia } from 'pinia';


class UsersCatalog extends CommonService<User, MainStoreSGA> {
    constructor() {
        super();
        this.route = 'user'
        this.store = useMainStore(createPinia());
    }

    getData() {
        try {
            this.makeRequest().then(response => this.handleData(response))
        } catch (error) {
            console.log(error);
        }
    }

    handleData(data: any): void {
        this.store?.putSMTH(data);
    }

    get getValue() {
        return this.store?.returnUser
    }
}


export const usersService = new UsersCatalog();