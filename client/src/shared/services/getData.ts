import { User } from '@/types/user'
// import { APICommand } from '@/types/api'
import axios, { AxiosInstance } from 'axios';
import { useMainStore } from '@/store/'


interface APICommand {
    route: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

interface CommonData<T> {
    id: number,
    data: T
}

abstract class Client {
    _api: AxiosInstance
    _route: string
    #timeout: number
    _apiPath: string | undefined


    constructor(url: string) {
        this._apiPath = process.env.NODE_ENV === 'production' ? process.env.API : process.env.LOCAL_API
        this._route = url
        this.#timeout = 1000

        this._api = axios.create({
            baseURL: this._apiPath,
            timeout: this.#timeout
        })

        
    }
}


class CommonService<Entity> extends Client {
    _state: string
    _response: Entity | null
    #command: APICommand | null


    constructor(url: string, stateName: string) {
        super(url);
        this._state = stateName;
        this._response = null;
        this.#command = null;
    }

    getData() {}

    async makeRequest(yourPath: string | null = null) {
        try {
            const { data } = await this._api.get(yourPath || this._route);
            this.handleData(data);

        } catch (err) {
            useMainStore().putSMTH([]);
            
        } finally {}
    }

    handleData(data: any) {
        useMainStore().putSMTH(data);
    }
}


export const commonService = new CommonService('user', 'main');