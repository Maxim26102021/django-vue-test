import { MainStoreSGA, User } from '@/types/mainStore'
import { CommonService } from './commonService';
import { useMainStore } from '@/store';
import { createPinia } from 'pinia';


class UsersCatalog extends CommonService<User, MainStoreSGA> {
    constructor() {
        super();
        this.route = 'user'

        this.api.interceptors.request.use((response) => {
            this.store = useMainStore();

            return response;
        })
    }

    getData(n: string) {
        try {
            this.makeRequest(n).then(response => this.handleData(response))
        } catch (error) {
            console.log(error);
        }
    }

    handleData(data: any): void {        
        this.store?.putSMTH(data)
    }
}


export const usersService = new UsersCatalog();